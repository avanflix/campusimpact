import Link from "next/link";

const prizes = [
  { medal: "🥇", place: "First Prize", amt: "₹5,000" },
  { medal: "🥈", place: "Second Prize", amt: "₹3,000" },
  { medal: "🥉", place: "Third Prize", amt: "₹1,500" },
  { medal: "⭐", place: "All Teams", amt: "Certificates", small: true },
];

const reqs = [
  "Team of exactly 4 students",
  "Original reel, max 2 minutes",
  "Any genre — any story you want to tell",
  "Submit reel URL before competition day",
];

export default function Competition() {
  return (
    <section id="competition" style={{ padding: "4rem 2rem" }}>
      <div className="container">
        <div className="comp-section reveal">
          <div className="comp-pattern" />
          <div className="comp-inner">
            {/* Left */}
            <div>
              <div className="comp-badge">⚡ Day 2 — The Main Event</div>
              <h2>
                Reel <span className="comp-title-accent">Competition</span>
              </h2>
              <p className="comp-desc">
                Bring your team of 4, shoot your story, and compete for the top prize.
                Every reel judged on creativity, execution, and storytelling. The stage is yours.
              </p>

              <div className="prizes-grid">
                {prizes.map((p) => (
                  <div key={p.place} className="prize-card">
                    <div className="prize-medal">{p.medal}</div>
                    <div className="prize-place">{p.place}</div>
                    <div className="prize-amt" style={p.small ? { fontSize: "1.1rem" } : {}}>
                      {p.amt}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                {reqs.map((r) => (
                  <div key={r} className="team-req">
                    <span className="team-req-icon">✓</span>
                    {r}
                  </div>
                ))}
              </div>

              <Link href="/register?type=competition" className="comp-btn">
                Register Your Team — ₹399
              </Link>
            </div>

            {/* Right – spinning reel */}
            <div className="comp-visual">
              <div className="comp-reel">
                <div className="reel-outer">
                  <div className="reel-spoke spoke-n" />
                  <div className="reel-spoke spoke-e" />
                  <div className="reel-spoke spoke-s" />
                  <div className="reel-spoke spoke-w" />
                  <div className="reel-inner">
                    <div className="reel-hub">▶</div>
                  </div>
                </div>
              </div>
              <div className="reel-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
