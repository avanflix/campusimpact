import Link from "next/link";

export default function CTA() {
  return (
    <section id="register" style={{ padding: "4rem 2rem" }}>
      <div className="container">
        <div className="cta-section reveal">
          <div className="cta-orb-1" />
          <div className="cta-orb-2" />
          <p className="section-eyebrow" style={{ position: "relative", zIndex: 1 }}>Ready?</p>
          <h2>Your Creative Story Starts Here</h2>
          <p>Hundreds of students will be there. Will you be one of them?</p>
          <div className="cta-btns">
            <Link href="/register" className="btn-primary">
              Register for Workshop — ₹299
            </Link>
            <Link href="/register?type=competition" className="btn-secondary">
              Register Team — ₹399
            </Link>
          </div>
          <p className="cta-login">
            Already registered?{" "}
            <Link href="/login">Login to your dashboard →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
