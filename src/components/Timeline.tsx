const events = [
  {
    bg: "linear-gradient(135deg,#EDE9FE,#C4B5FD)",
    icon: "🌅",
    day: "Day 1 · Morning",
    title: "Welcome & Track Orientation",
    desc: "Meet your mentors, understand the day's structure, and gear up for your chosen creative track.",
  },
  {
    bg: "linear-gradient(135deg,#FCE7F3,#FBCFE8)",
    icon: "🎓",
    day: "Day 1 · Full Day",
    title: "Intensive Workshop Sessions",
    desc: "Hands-on learning in Direction, Acting, Photography, Videography, or Modeling — guided by industry professionals.",
  },
  {
    bg: "linear-gradient(135deg,#DCFCE7,#A7F3D0)",
    icon: "🌟",
    day: "Day 1 · Evening",
    title: "Showcase & Peer Review",
    desc: "Present what you've learned, get feedback from mentors, and connect with fellow creatives.",
  },
  {
    bg: "linear-gradient(135deg,#FFF7ED,#FED7AA)",
    icon: "🎬",
    day: "Day 2 · Full Day",
    title: "Reel Competition",
    desc: "Teams present their reels. Judging panel evaluates creativity, technical execution, and storytelling. Winners announced at the end of the day.",
  },
  {
    bg: "linear-gradient(135deg,#FBBF24,#F97316)",
    icon: "🏆",
    day: "Day 2 · Closing",
    title: "Awards & Closing Ceremony",
    desc: "Prize distribution, certificates for all participants, and the memories of a lifetime.",
  },
];

export default function Timeline() {
  return (
    <section>
      <div className="container">
        <div className="text-center reveal">
          <p className="section-eyebrow">The Journey</p>
          <h2 className="section-title">Two Days, A Lifetime of Skills</h2>
        </div>
        <div className="timeline reveal">
          {events.map((e, i) => (
            <div key={i} className="tl-item">
              <div className="tl-dot" style={{ background: e.bg }}>{e.icon}</div>
              <div className="tl-body">
                <div className="tl-day">{e.day}</div>
                <div className="tl-title">{e.title}</div>
                <div className="tl-desc">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
