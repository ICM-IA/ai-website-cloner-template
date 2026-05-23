"use client";

import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalModal({ isOpen, onClose }: CalModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

      {/* Modal card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#0D0D0D",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "900px",
          height: "min(680px, 90vh)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,20,20,0.08)",
          animation: "slideUp 0.25s ease",
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#9CA3AF" }}>
            Agendar llamada · ICM-IA
          </span>
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "transparent",
              cursor: "pointer",
              color: "#9CA3AF",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,20,20,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,20,20,0.3)";
              (e.currentTarget as HTMLButtonElement).style.color = "#FF1414";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLButtonElement).style.color = "#9CA3AF";
            }}
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Cal.com iframe */}
        <iframe
          src="https://cal.com/icm-ia/reconocimiento?embed=true&theme=dark&hideEventTypeDetails=false&layout=month_view"
          style={{
            width: "100%",
            height: "calc(100% - 57px)",
            border: "none",
            display: "block",
          }}
          title="Agendar llamada con ICM-IA"
        />
      </div>
    </div>
  );
}

// ─── Convenient hook ────────────────────────────────────────────────────────
export function useCalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open  = useCallback(() => setIsOpen(true),  []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
}
