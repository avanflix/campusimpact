import Link from "next/link";

const tracks = [
  {
    id: "direction",
    cls: "track-direction",
    icon: "🎬",
    iconBg: "linear-gradient(135deg,#EDE9FE,#DDD6FE)",
    title: "Direction",
    desc: "Learn the director's eye — scene composition, actor communication, story structure, and shot calling from script to screen.",
    pillBg: "#EDE9FE",
    pillColor: "#5B21B6",
    pillText: "Most Popular",
  },
  {
    id: "acting",
    cls: "track-acting",
    icon: "🎭",
    iconBg: "linear-gradient(135deg,#FCE7F3,#FBCFE8)",
    title: "Acting",
    desc: "Unlock your emotional range. Character building, improvisation, emotional memory, and performance for camera vs stage.",
    pillBg: "#FCE7F3",
    pillColor: "#BE185D",
    pillText: "Expressive",
  },
  {
    id: "photography",
    cls: "track-photo",
    icon: "📸",
    iconBg: "linear-gradient(135deg,#E0F2FE,#BAE6FD)",
    title: "Photography",
    desc: "Frame the world beautifully. Lighting theory, composition, portraiture, golden hour shooting, and Lightroom basics.",
    pillBg: "#E0F2FE",
    pillColor: "#0369A1",
    pillText: "Visual Art",
  },
  {
    id: "videography",
    cls: "track-video",
    icon: "🎥",
    iconBg: "linear-gradient(135deg,#DCFCE7,#BBF7D0)",
    title: "Videography",
    desc: "Shoot like a pro. Camera movement, audio capture, B-roll strategy, color grading, and final cut editing workflows.",
    pillBg: "#DCFCE7",
    pillColor: "#166534",
    pillText: "Technical",
  },
  {
    id: "modeling",
    cls: "track-model",
    icon: "👗",
    iconBg: "linear-gradient(135deg,#FFF7ED,#FED7AA)",
    title: "Modeling",
    desc: "Walk with confidence. Posing techniques, facial expressions, editorial vs commercial modeling, and portfolio building.",
    pillBg: "#FFF7ED",
    pillColor: "#C2410C",
    pillText: "Confidence",
  },
];

export default function Workshops() {
  return (
    <section id="workshops">
      <div className="container">
        <div className="text-center reveal">
          <p className="section-eyebrow">Day 1 — The Workshop</p>
          <h2 className="section-title">5 Tracks, One Transformative Day</h2>
          <p className="section-sub">
            Immerse yourself in the creative discipline you've always wanted to master.
            Hands-on sessions, real industry mentors.
          </p>
        </div>

        <div style={{ marginTop: "3rem" }} className="reveal">
          <div className="days-section">
            <div className="tracks-grid">
              {tracks.map((t) => (
                <div key={t.id} className={`track-card ${t.cls}`}>
                  <div className="track-icon" style={{ background: t.iconBg }}>
                    {t.icon}
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <span
                    className="track-pill"
                    style={{ background: t.pillBg, color: t.pillColor }}
                  >
                    {t.pillText}
                  </span>
                </div>
              ))}

              {/* Info Card */}
              <div className="track-info-card">
                <div>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✦</div>
                  <h3>Workshop Details</h3>
                  <p>Full-day sessions with industry mentors. Individual registration. Certificate on completion.</p>
                </div>
                <div style={{ marginTop: "1.5rem" }}>
                  <p className="track-price">₹299</p>
                  <p className="track-price-sub">per person · all tracks included</p>
                  <Link href="/register" className="track-register-btn">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
