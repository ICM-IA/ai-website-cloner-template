"use client";
import { useState, useRef } from "react";

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
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-sm md:max-w-2xl mx-auto"
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
                transform: "none",
                transition: "none",
              }}
              className={index === 2 ? "col-span-2 w-1/2 mx-auto md:col-span-1 md:w-auto" : ""}
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
                  gap: "5px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.2px",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, display: "block" }}
                >
                  <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
                Reel
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
