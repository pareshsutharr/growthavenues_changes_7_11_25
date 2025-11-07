import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiDownload, FiSearch, FiRefreshCcw } from "react-icons/fi";
import Header from "./Header2";
import Footer from "./Footer";

const DEFAULT_PAGE_SIZE = 9;
const SORT_OPTIONS = [
  { value: "-createdAt", label: "Newest" },
  { value: "createdAt", label: "Oldest" },
  { value: "title", label: "Title A-Z" },
  { value: "-title", label: "Title Z-A" },
];

function useDebouncedValue(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

function formatFileSize(bytes = 0) {
  if (bytes === 0 || !Number.isFinite(bytes)) return "Unknown size";
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(kb > 100 ? 0 : 1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(mb > 100 ? 0 : 1)} MB`;
  const gb = mb / 1024;
  return `${gb.toFixed(gb > 100 ? 0 : 1)} GB`;
}

function getDownloadUrl(id = "") {
  if (!id) return "#";
  const base = window.location.origin;
  return `${base}/api/documents/${id}/download`;
}

const Downloads = ({ embedded = false }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [documents, setDocuments] = useState([]);
  const [meta, setMeta] = useState({ categories: [], tags: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [error, setError] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const sort = searchParams.get("sort") || "-createdAt";
  const category = searchParams.get("category") || "";
  const tagsParam = searchParams.get("tags") || "";
  const selectedTags = useMemo(
    () =>
      tagsParam
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    [tagsParam]
  );
  const qParam = searchParams.get("q") || "";
  const [searchValue, setSearchValue] = useState(qParam);
  const debouncedSearch = useDebouncedValue(searchValue, 450);

  useEffect(() => {
    const setTitle = () => {
      document.title = "Downloads | Growth Avenues";
    };
    setTitle();
  }, []);

  useEffect(() => {
    setSearchValue(qParam);
  }, [qParam]);

  useEffect(() => {
    if (debouncedSearch === qParam) return;
    updateParams({ q: debouncedSearch || null, page: 1 });
  }, [debouncedSearch]);

  useEffect(() => {
    // Static: no remote metadata
    setMeta({ categories: [], tags: [], total: 0 });
    setLoadingMeta(false);
  }, []);

  useEffect(() => {
    // Static: no remote documents; clear list and finish
    setLoading(true);
    setError(null);
    setDocuments([]);
    setMeta((prev) => ({ ...prev, total: 0 }));
    setLoading(false);
  }, [page, sort, qParam, category, selectedTags]);

  const totalPages = useMemo(() => {
    if (!meta.total || meta.total < 1) return 1;
    return Math.max(1, Math.ceil(meta.total / DEFAULT_PAGE_SIZE));
  }, [meta.total]);

  function updateParams(updates) {
    const next = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        next.delete(key);
      } else {
        next.set(key, value);
      }
    });
    if (!updates.page && page > totalPages) {
      next.set("page", String(totalPages));
    }
    setSearchParams(next, { replace: true });
  }

  const handleTagToggle = (tag) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    updateParams({
      tags: next.length ? next.join(",") : null,
      page: 1,
    });
  };

  const handleDownload = (doc) => {
    // Static: no downloads available
    alert("Downloads are not available in the static site.");
  };

  const resetFilters = () => {
    setSearchValue("");
    setSearchParams({}, { replace: true });
  };

  return (
    <>
      {!embedded && (
        <Header activePage="downloads" />
      )}
      <main className={embedded ? "" : "bg-light"}>
        <section className="container py-5" id="downloads" role="region" aria-label="Downloads">
          <header className="text-center mb-5">
            <h1 className="display-5 fw-bold"  style={{paddingTop:"80px"}}>Downloads Library</h1>
            <p className="text-muted lead">
              Explore our curated collection of research reports, playbooks,
              and client-ready PDFs crafted by the Growth Avenues team.
            </p>
          </header>

          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <div className="row g-3 align-items-end">
                <div className="col-12 col-lg-4">
                  <label className="form-label text-muted fw-semibold">
                    Search
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <FiSearch />
                    </span>
                    <input
                      className="form-control"
                      placeholder="Find documents..."
                      value={searchValue}
                      onChange={(e) => {
                        setSearchValue(e.target.value);
                        if (page !== 1) updateParams({ page: 1 });
                      }}
                      aria-label="Search documents"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-4 col-lg-3">
                  <label className="form-label text-muted fw-semibold">
                    Category
                  </label>
                  <select
                    className="form-select"
                    value={category}
                    onChange={(e) =>
                      updateParams({
                        category: e.target.value || null,
                        page: 1,
                      })
                    }
                  >
                    <option value="">All categories</option>
                    {meta.categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-4 col-lg-3">
                  <label className="form-label text-muted fw-semibold">
                    Sort by
                  </label>
                  <select
                    className="form-select"
                    value={sort}
                    onChange={(e) =>
                      updateParams({ sort: e.target.value, page: 1 })
                    }
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-4 col-lg-2 d-grid">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetFilters}
                  >
                    <FiRefreshCcw className="me-1" />
                    Reset
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <span className="form-label text-muted fw-semibold d-inline-flex align-items-center gap-2">
                  Tags
                </span>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {loadingMeta ? (
                    <div className="text-secondary">Loading tags...</div>
                  ) : meta.tags.length === 0 ? (
                    <span className="text-secondary small">
                      Tags will appear as documents are published.
                    </span>
                  ) : (
                    meta.tags.map((tag) => {
                      const isActive = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          className={`btn btn-sm ${
                            isActive
                              ? "btn-primary"
                              : "btn-outline-primary"
                          } rounded-pill`}
                          onClick={() => handleTagToggle(tag)}
                          aria-pressed={isActive}
                        >
                          #{tag}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>

          <section aria-live="polite">
            {error ? (
              <div className="alert alert-danger">
                {error}
              </div>
            ) : loading ? (
              <div className="row g-4">
                {Array.from({ length: DEFAULT_PAGE_SIZE }).map((_, idx) => (
                  <div className="col-12 col-md-6 col-lg-4" key={idx}>
                    <div className="card shadow-sm border-0 placeholder-wave">
                      <div className="card-body">
                        <div className="placeholder col-8 mb-2"></div>
                        <div className="placeholder col-12 mb-2"></div>
                        <div className="placeholder col-10 mb-2"></div>
                        <div className="placeholder col-6"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : documents.length === 0 ? (
              <div className="text-center py-5">
                <h4>No documents found</h4>
                <p className="text-muted">
                  Try adjusting your filters or clearing the search to explore
                  our entire library.
                </p>
              </div>
            ) : (
              <div className="row g-4">
                {documents.map((doc) => (
                  <div className="col-12 col-md-6 col-lg-4" key={doc.id}>
                    <article className="card h-100 shadow-sm border-0">
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex align-items-start justify-content-between mb-3">
                          <span className="badge rounded-pill bg-primary-subtle text-primary">
                            {doc.category || "General"}
                          </span>
                          <span className="text-secondary small">
                            {new Date(doc.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="h5 fw-semibold">{doc.title}</h3>
                        <p className="text-muted flex-grow-1">
                          {doc.description || "No description available."}
                        </p>
                        <div className="mb-3">
                          <div className="mt-2 d-flex flex-wrap gap-2">
                            {(doc.tags || []).map((tag) => (
                              <span
                                className="badge rounded-pill bg-light text-secondary border"
                                key={tag}
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                          onClick={() => handleDownload(doc)}
                          disabled={downloadingId === doc.id}
                        >
                          <FiDownload />
                          {downloadingId === doc.id
                            ? "Preparing..."
                            : "Download PDF"}
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            )}
          </section>

          {documents.length > 0 && totalPages > 1 && (
            <nav className="mt-5" aria-label="Downloads pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => updateParams({ page: page - 1 })}
                    disabled={page === 1}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNumber = idx + 1;
                  const isActive = pageNumber === page;
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    Math.abs(pageNumber - page) <= 1
                  ) {
                    return (
                      <li
                        key={pageNumber}
                        className={`page-item ${isActive ? "active" : ""}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => updateParams({ page: pageNumber })}
                        >
                          {pageNumber}
                        </button>
                      </li>
                    );
                  }
                  if (
                    Math.abs(pageNumber - page) === 2 &&
                    pageNumber !== 2 &&
                    pageNumber !== totalPages - 1
                  ) {
                    return (
                      <li key={`ellipsis-${pageNumber}`} className="page-item disabled">
                        <span className="page-link">…</span>
                      </li>
                    );
                  }
                  return null;
                })}
                <li
                  className={`page-item ${
                    page === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => updateParams({ page: page + 1 })}
                    disabled={page === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </section>
      </main>
      {!embedded && <Footer />}
    </>
  );
};

export default Downloads;


