"use client";
import { useState, useRef } from "react";
import { Camera } from "lucide-react";

export default function InstagramSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    { id: 1, src: "/videos/instagram-1.mp4" },
    { id: 2, src: "/videos/instagram-2.mov" },
    { id: 3, src: "/videos/instagram-3.mp4" },
  ];

  const handleVideoClick = (videoId: number, index: number) => {
    const videoEl = videoRefs.current[index];
    if (!videoEl) return;

    // Si es el mismo video activo, toggle mute
    if (activeVideo === videoId) {
      const newMutedState = !isMuted;
      videoEl.muted = newMutedState;
      setIsMuted(newMutedState);
      return;
    }

    // Si hay un video activo diferente, silenciarlo y ponerlo en loop
    if (activeVideo !== null && activeVideo !== videoId) {
      const prevIndex = videos.findIndex((v) => v.id === activeVideo);
      if (videoRefs.current[prevIndex]) {
        videoRefs.current[prevIndex].muted = true;
        videoRefs.current[prevIndex].loop = true;
        videoRefs.current[prevIndex].play();
      }
    }

    // Activar el nuevo video
    videoEl.muted = false;
    videoEl.loop = false;
    videoEl.currentTime = 0;
    videoEl.play();

    setActiveVideo(videoId);
    setIsMuted(false);
  };

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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="md:grid-cols-3"
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.gridTemplateColumns = "repeat(2, 1fr)";
          }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                aspectRatio: "9/16",
                cursor: "pointer",
                ...(index === 2 && { gridColumn: "1 / -1", width: "50%", margin: "0 auto" }),
              }}
              className="md:w-auto"
              onClick={() => handleVideoClick(video.id, index)}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
              {/* Reel badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  padding: "4px 9px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.2px",
                }}
              >
                <Camera size={12} style={{ flexShrink: 0 }} />
                Reel
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
