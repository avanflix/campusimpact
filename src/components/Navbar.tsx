import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">✦ CampusImpact</Link>
      <div className="nav-links">
        <Link href="/#workshops">Workshops</Link>
        <Link href="/#competition">Competition</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/register" className="nav-cta">Register Now</Link>
      </div>
    </nav>
  );
}
