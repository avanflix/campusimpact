import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-blob blob-1" />
      <div className="hero-bg-blob blob-2" />
      <div className="hero-bg-blob blob-3" />

      <div className="hero-float-card float-1">
        <div className="float-icon" style={{ background: "#EDE9FE" }}>📸</div>
        Photography Track Open
      </div>
      <div className="hero-float-card float-2">
        <div className="float-icon" style={{ background: "#FFF7ED" }}>🏆</div>
        ₹5,000 Prize Awaits
      </div>
      <div className="hero-float-card float-3">
        <div className="float-icon" style={{ background: "#DCF9F3" }}>🎬</div>
        Reel Competition
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          Across Multiple Colleges · 2025
        </div>
        <h1>
          Where Students Become
          <span className="line-accent">Creative Visionaries</span>
        </h1>
        <p className="hero-desc">
          A 2-day intensive workshop across colleges — learn Direction, Acting,
          Photography, Videography &amp; Modeling from industry pros. Then compete for glory.
        </p>
        <div className="hero-btns">
          <Link href="/register" className="btn-primary">Claim Your Spot →</Link>
          <Link href="#workshops" className="btn-secondary">Explore Tracks</Link>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-num">5</span>
            <span className="stat-label">Creative Tracks</span>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Power Days</span>
          </div>
          {/* <div className="stat-divider" /> */}
          {/* <div className="hero-stat">
            <span className="stat-num">₹9.5K</span>
            <span className="stat-label">Prize Pool</span>
          </div> */}
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
