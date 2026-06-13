import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-subtle">
      <div className="container">
        <div className="text-center reveal">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">Simple, Clear Fees</h2>
          <p className="section-sub">
            Two separate registrations — one for each day. Register for both and make
            the most of the entire experience.
          </p>
        </div>

        <div className="pricing-grid reveal">
          {/* Workshop */}
          <div className="price-card price-card-workshop">
            <div className="price-label">Day 1 — Workshop</div>
            <div className="price-title">Workshop Pass</div>
            <div className="price-tag">
              ₹299 <span className="price-period">/ person</span>
            </div>
            <ul className="price-features">
              {[
                "Full-day workshop access",
                "Choice of all 5 creative tracks",
                "Industry mentor guidance",
                "Certificate of completion",
                "Individual registration",
              ].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link href="/register" className="price-btn">Register for Workshop</Link>
          </div>

          {/* Competition */}
          <div className="price-card price-card-comp">
            <div className="price-popular">⚡ Team Event</div>
            <div className="price-label" style={{ color: "rgba(255,255,255,.6)" }}>
              Day 2 — Reel Competition
            </div>
            <div className="price-title">Competition Entry</div>
            <div className="price-tag">
              ₹399 <span className="price-period">/ team</span>
            </div>
            <ul className="price-features">
              {[
                "Team of exactly 4 students",
                // "Compete for ₹9,500 prize pool",
                "Professional judging panel",
                "Certificate for every member",
                "Reel screening on big stage",
              ].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <Link href="/register?type=competition" className="price-btn">
              Register Your Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
