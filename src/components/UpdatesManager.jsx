import React, { useEffect, useMemo, useState } from "react";
import { adminGetUpdates, adminSaveUpdates } from "../services/api";
import { FiPlus, FiSave, FiTrash2, FiExternalLink, FiRefreshCcw } from "react-icons/fi";

function uid(prefix = "u") {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

export default function UpdatesManager() {
  const [updates, setUpdates] = useState({ news: [], ann: [] });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let alive = true;
    setLoading(true);
    adminGetUpdates()
      .then((res) => {
        if (!alive) return;
        const up = res?.data?.updates || { news: [], ann: [] };
        setUpdates({
          news: Array.isArray(up.news) ? up.news : [],
          ann: Array.isArray(up.ann) ? up.ann : [],
        });
      })
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const stats = useMemo(() => ({
    news: updates.news.length,
    ann: updates.ann.length,
  }), [updates]);

  const addItem = (type) => {
    const now = new Date();
    const item = { id: uid(type === "news" ? "n" : "a"), title: "", time: now.toLocaleString(), link: "" };
    setUpdates((prev) => ({ ...prev, [type]: [item, ...(prev[type] || [])] }));
  };

  const updateItem = (type, id, field, value) => {
    setUpdates((prev) => ({
      ...prev,
      [type]: (prev[type] || []).map((it) => (it.id === id ? { ...it, [field]: value } : it)),
    }));
  };

  const removeItem = (type, id) => {
    setUpdates((prev) => ({ ...prev, [type]: (prev[type] || []).filter((it) => it.id !== id) }));
  };

  const saveAll = async () => {
    setSaving(true);
    setMessage("");
    try {
      await adminSaveUpdates(updates);
      setMessage("Saved");
      setTimeout(() => setMessage(""), 1200);
    } catch (e) {
      setMessage("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  const reload = async () => {
    setLoading(true);
    try {
      const res = await adminGetUpdates();
      const up = res?.data?.updates || { news: [], ann: [] };
      setUpdates({ news: Array.isArray(up.news) ? up.news : [], ann: Array.isArray(up.ann) ? up.ann : [] });
    } finally { setLoading(false); }
  };

  const renderList = (type, label) => {
    const list = updates[type] || [];
    return (
      <div className="card h-100 shadow-sm">
        <div className="card-header d-flex align-items-center justify-content-between">
          <div className="fw-bold">{label} <span className="text-secondary">({list.length})</span></div>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-outline-primary" onClick={() => addItem(type)}>
              <FiPlus /> Add
            </button>
          </div>
        </div>
        <div className="list-group list-group-flush">
          {list.length === 0 ? (
            <div className="list-group-item text-secondary">No items yet.</div>
          ) : (
            list.map((it) => (
              <div key={it.id} className="list-group-item">
                <div className="row g-2 align-items-center">
                  <div className="col-12 col-md-6">
                    <label className="form-label small m-0">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Headline or brief copy"
                      value={it.title || ""}
                      onChange={(e) => updateItem(type, it.id, "title", e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <label className="form-label small m-0">Link (optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="/blogs or https://..."
                      value={it.link || ""}
                      onChange={(e) => updateItem(type, it.id, "link", e.target.value)}
                    />
                  </div>
                  <div className="col-8 col-md-2">
                    <label className="form-label small m-0">Time label</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Now, 2h ago, etc."
                      value={it.time || ""}
                      onChange={(e) => updateItem(type, it.id, "time", e.target.value)}
                    />
                  </div>
                  <div className="col-4 col-md-1 d-flex align-items-end justify-content-end gap-1">
                    {it.link ? (
                      <a className="btn btn-sm btn-outline-secondary" href={it.link} target={it.link?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title="Open link">
                        <FiExternalLink />
                      </a>
                    ) : null}
                    <button className="btn btn-sm btn-outline-danger" title="Remove" onClick={() => removeItem(type, it.id)}>
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div>
          <h3 className="m-0">News & Announcements</h3>
          <div className="text-secondary small">Local-only data store. Saved in your browser.</div>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary" disabled={loading || saving} onClick={reload} title="Reload from local DB">
            <FiRefreshCcw /> Reload
          </button>
          <button className="btn btn-primary" disabled={saving} onClick={saveAll} title="Save to local DB">
            <FiSave /> {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      {message ? <div className="alert alert-info py-2">{message}</div> : null}

      {loading ? (
        <div className="text-secondary">Loading...</div>
      ) : (
        <div className="row g-3">
          <div className="col-12 col-lg-6">
            {renderList("news", "News")}
          </div>
          <div className="col-12 col-lg-6">
            {renderList("ann", "Announcements")}
          </div>
        </div>
      )}

      <style>{`
        .list-group-item { background: #fff; }
      `}</style>
    </div>
  );
}

