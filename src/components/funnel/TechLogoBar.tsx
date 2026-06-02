"use client";

const styles = `
  @keyframes scrollTech {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .tech-track {
    display: flex;
    align-items: center;
    gap: 56px;
    width: max-content;
    animation: scrollTech 18s linear infinite;
  }
  .tech-track:hover {
    animation-play-state: paused;
  }
`;

interface Tech {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const techs: Tech[] = [
  {
    name: "Meta",
    color: "#0866FF",
    icon: (
      <svg width="22" height="14" viewBox="0 0 36 22" fill="none">
        <path d="M4.5 11C4.5 8.8 5.6 6.9 7.2 6.9C8.6 6.9 9.5 7.9 11 10.4L13.1 14C15.2 17.6 17.1 19.5 19.8 19.5C23.8 19.5 26.8 15.8 26.8 11C26.8 8.2 25.5 5.7 23.3 5.7C21.8 5.7 20.6 6.8 19.8 8.3L18 11" stroke="#0866FF" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 11C16.5 8.4 14.8 5.7 12.2 5.7C9 5.7 4.5 8.8 4.5 11C4.5 13.2 5.4 15.2 7.2 15.2C8.8 15.2 9.9 14.1 11.5 11.4" stroke="#0866FF" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#D4956A",
    icon: (
      <svg width="18" height="20" viewBox="0 0 28 32" fill="none">
        <path d="M14 2L24 8V16L14 22L4 16V8L14 2Z" stroke="#D4956A" strokeWidth="2" fill="rgba(212,149,106,0.15)"/>
        <circle cx="14" cy="14" r="4" fill="#D4956A"/>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    color: "#ECECEC",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0L4.1537 14.0a4.4992 4.4992 0 0 1-1.8129-6.1044zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7865a4.504 4.504 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="#ECECEC"/>
      </svg>
    ),
  },
  {
    name: "n8n",
    color: "#F85400",
    icon: (
      <svg width="24" height="16" viewBox="0 0 40 26" fill="none">
        <text x="0" y="20" fontSize="20" fontWeight="800" fill="#F85400" fontFamily="monospace">n8n</text>
      </svg>
    ),
  },
  {
    name: "GoHighLevel",
    color: "#5A67D8",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L19 6.5V17.5L12 22L5 17.5V6.5L12 2Z" fill="rgba(90,103,216,0.2)" stroke="#5A67D8" strokeWidth="1.5"/>
        <path d="M9 12L11 14L15 10" stroke="#5A67D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    color: "#25D366",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: "Gemini",
    color: "#4285F4",
    icon: (
      <svg width="16" height="20" viewBox="0 0 24 30" fill="none">
        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" fill="url(#gemini-grad)"/>
        <defs>
          <linearGradient id="gemini-grad" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#4285F4"/>
            <stop offset="100%" stopColor="#8B5CF6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

function TechItem({ tech }: { tech: Tech }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", opacity: 0.5, transition: "opacity 0.2s", cursor: "default" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "1"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = "0.5"; }}
    >
      {tech.icon}
      <span style={{ fontSize: "17px", fontWeight: 700, color: tech.color, letterSpacing: "-0.3px" }}>
        {tech.name}
      </span>
    </div>
  );
}

function Dot() {
  return <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#374151", flexShrink: 0 }} />;
}

export default function TechLogoBar() {
  const items = techs.flatMap((t, i) => i < techs.length - 1 ? [t, null] : [t]);

  return (
    <>
      <style>{styles}</style>
      <section style={{ backgroundColor: "#000", paddingTop: "32px", paddingBottom: "32px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{
            background: "linear-gradient(135deg, #0D0D0D 0%, #111 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "28px 32px",
            overflow: "hidden",
          }}>
            <p style={{ textAlign: "center", margin: "0 0 20px 0", fontSize: "11px", fontWeight: 700, color: "#374151", letterSpacing: "2px", textTransform: "uppercase" }}>
              TECNOLOGÍAS QUE INTEGRAMOS
            </p>
            <div style={{ position: "relative" }}>
              <div className="tech-track">
                {items.map((item, i) =>
                  item ? <TechItem key={`a-${i}`} tech={item} /> : <Dot key={`da-${i}`} />
                )}
                {items.map((item, i) =>
                  item ? <TechItem key={`b-${i}`} tech={item} /> : <Dot key={`db-${i}`} />
                )}
              </div>
              <div style={{ position: "absolute", top: 0, left: 0, width: "60px", height: "100%", background: "linear-gradient(to right, #0D0D0D, transparent)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, right: 0, width: "60px", height: "100%", background: "linear-gradient(to left, #0D0D0D, transparent)", pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
