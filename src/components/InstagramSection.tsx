"use client";

export default function InstagramSection() {
  const videos = [
    { id: 1, src: "/videos/instagram-1.mp4" },
    { id: 2, src: "/videos/instagram-2.mov" },
    { id: 3, src: "/videos/instagram-3.mp4" },
  ];

  return (
    <section style={{ padding: "80px 24px", background: "rgb(248,250,252)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              color: "#f59e0b",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            SÍGUENOS
          </p>
          <h2
            style={{
              color: "#0d1b3e",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            Conéctate en{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f59e0b, #fde68a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Instagram
            </span>
          </h2>
          <p
            style={{
              color: "rgba(13,27,62,0.75)",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Seguí nuestras historias de instalaciones, consejos de energía solar y novedades del sector.
          </p>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/energiasolarbrandsen"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "32px",
              background: "linear-gradient(135deg, #f59e0b, #fde68a)",
              color: "#0d1b3e",
              fontWeight: 800,
              padding: "14px 40px",
              borderRadius: "8px",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(245,158,11,0.4)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "scale(1)";
            }}
          >
            📱 Seguir en Instagram
          </a>
        </div>

        {/* Videos Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                aspectRatio: "9/16",
              }}
            >
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                controls
                playsInline
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
