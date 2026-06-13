const items = [
  "Direction", "Acting", "Photography", "Videography", "Modeling",
  "Reel Competition", "₹5000 First Prize", "Certificate of Excellence", "2-Day Workshop",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
