import React, { useEffect, useState } from "react";

export default function Leads() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch('/api/contact?limit=200').catch(() => null);
        if (!res || !res.ok) throw new Error('Failed');
        const data = await res.json();
        if (mounted) setItems(Array.isArray(data.items) ? data.items : []);
      } catch (e) {
        if (mounted) setError("Could not load leads. Ensure the backend is configured.");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  return (
    <main className="container py-4">
      <h1 className="h4 mb-3">Contact Leads</h1>
      {loading ? <div>Loading…</div> : null}
      {error ? <div className="alert alert-warning">{error}</div> : null}
      {!loading && !error ? (
        <div className="table-responsive">
          <table className="table table-sm align-middle">
            <thead>
              <tr>
                <th scope="col">When</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => {
                const dt = it.createdAt ? new Date(it.createdAt) : null;
                return (
                  <tr key={it._id}>
                    <td style={{whiteSpace:'nowrap'}}>{dt ? dt.toLocaleString() : '-'}</td>
                    <td>{it.name || '-'}</td>
                    <td>{it.email || '-'}</td>
                    <td>{it.phone || '-'}</td>
                    <td>{it.subject || '-'}</td>
                    <td style={{maxWidth: 420}}><div style={{whiteSpace:'pre-wrap'}}>{it.message || '-'}</div></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </main>
  );
}

