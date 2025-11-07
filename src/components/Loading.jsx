import React from "react";

export default function Loading({ small = false, label = "Loading market data" }) {
  const size = small ? 40 : 72;
  const travel = small ? 16 : 28;

  return (
    <div
      role="status"
      aria-live="polite"
      className="ga-loading text-center d-inline-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: small ? 48 : 96 }}
    >
      {/* Chart-inspired loading animation */}
      <div
        className="chart-loading"
        style={{
          width: size,
          height: size,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "4px 0"
        }}
      >
        {[0, 1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className="chart-bar"
            style={{
              width: Math.round(size * 0.12),
              background: "linear-gradient(to top, #059669, #10b981)",
              borderRadius: "2px 2px 0 0",
              animation: `chartPulse 1.2s ease-in-out infinite`,
              animationDelay: `${bar * 0.15}s`,
              height: `${30 + (bar * 15)}%`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      {/* Optional: Currency symbol animation */}
      {!small && (
        <div
          className="currency-pulse mt-2"
          style={{
            fontSize: "12px",
            fontWeight: "600",
            color: "#059669",
            animation: "pulse 2s ease-in-out infinite"
          }}
        >
          ₹ Growth Avenues
        </div>
      )}

      <span className="visually-hidden">{label}…</span>
      
      <style>{`
        @keyframes chartPulse {
          0%, 100% { 
            transform: scaleY(1);
            opacity: 0.7;
          }
          50% { 
            transform: scaleY(1.3);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .ga-loading .chart-bar { 
          will-change: transform, opacity; 
        }
        
        @media (prefers-reduced-motion: reduce) { 
          .ga-loading .chart-bar { 
            animation: none !important; 
          }
          .currency-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}