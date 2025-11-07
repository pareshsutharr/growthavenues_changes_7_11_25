import 'dotenv/config';
// Also load .env.local if present (useful for local dev)
import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';
import http from 'node:http';
import { fileURLToPath, pathToFileURL } from 'node:url';
// load .env.local if exists in this directory
try {
  const localEnv = path.join(path.dirname(fileURLToPath(import.meta.url)), '.env.local');
  if (fs.existsSync(localEnv)) {
    dotenv.config({ path: localEnv, override: true });
  }
} catch {}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const apiDir = path.join(__dirname, 'api');
const PORT = Number(process.env.API_PORT || 3000);

function parseQuery(url) {
  try {
    const u = new URL(url, 'http://localhost');
    return { pathname: u.pathname, query: Object.fromEntries(u.searchParams) };
  } catch {
    return { pathname: '/', query: {} };
  }
}

function resolveHandlerFile(pathname) {
  if (!pathname.startsWith('/api')) return null;
  let rel = pathname.replace(/^\/api\/?/, '').replace(/\\/g, '/');
  if (!rel) return null;
  let filePath = path.join(apiDir, rel);
  try {
    const stat = fs.existsSync(filePath) ? fs.statSync(filePath) : null;
    if (stat && stat.isDirectory()) {
      const idxTs = path.join(filePath, 'index.ts');
      const idxJs = path.join(filePath, 'index.js');
      if (fs.existsSync(idxTs)) filePath = idxTs; else filePath = idxJs;
    } else if (!/\.(ts|js)$/.test(filePath)) {
      const ts = `${filePath}.ts`;
      const js = `${filePath}.js`;
      filePath = fs.existsSync(ts) ? ts : js;
    }
  } catch {}
  if (!fs.existsSync(filePath)) return null;
  return filePath;
}

const server = http.createServer(async (req, res) => {
  const { pathname, query } = parseQuery(req.url || '/');
  if (!pathname.startsWith('/api')) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'Not found' }));
    return;
  }

  req.query = query;

  const filePath = resolveHandlerFile(pathname);
  if (!filePath) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'No handler for path' }));
    return;
  }

  try {
    const mod = await import(pathToFileURL(filePath).href);
    const handler = mod && (mod.default || mod.handler || mod.route);
    if (typeof handler !== 'function') throw new Error('Invalid handler export');
    await handler(req, res);
  } catch (e) {
    console.error('API error', e);
    try {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ok: false, error: 'Internal server error' }));
    } catch {}
  }
});

server.listen(PORT, () => {
  console.log(`API dev server listening on http://localhost:${PORT}`);
  console.log(`Serving handlers from ${apiDir}`);
});
