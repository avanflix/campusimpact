const faqs = [
  {
    q: "Can I register for both the workshop and the competition?",
    a: "Absolutely! The workshop (Day 1) and competition (Day 2) are separate registrations. We encourage all participants to join both for the complete experience.",
  },
  {
    q: "Do all 4 team members need to register individually for the workshop?",
    a: "Yes. The ₹299 workshop fee is individual. The ₹399 competition fee covers the entire team of 4 as one entry.",
  },
  {
    q: "What equipment do I need to bring for my track?",
    a: "Equipment varies by track. Most tracks provide basic gear. We recommend bringing your phone for all sessions. Detailed requirements are shared after registration.",
  },
  {
    q: "When and where will the workshop be held?",
    a: "The workshop travels across multiple colleges. After registration, you'll receive the specific venue and date details for your college.",
  },
  {
    q: "What if my team doesn't have experience with reels?",
    a: "That's the beauty of Day 1 — the workshop teaches you exactly what you need. Many competition winners have no prior experience when they walk in.",
  },
  {
    q: "Is there a deadline for competition reel submission?",
    a: "Yes. Reels must be submitted via the provided link at least 24 hours before competition day. Live judging also happens on the day itself.",
  },
];

export default function FAQ() {
  return (
    <section>
      <div className="container">
        <div className="text-center reveal">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">Got Questions?</h2>
        </div>
        <div className="faq-grid reveal">
          {faqs.map((f) => (
            <div key={f.q} className="faq-card">
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
