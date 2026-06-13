import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-logo">✦ CampusImpact Workshop</div>
            <p>Empowering students to find their creative voice through workshops and competitions across colleges.</p>
          </div>
          <div className="footer-col">
            <h4>Workshop</h4>
            <ul>
              <li><Link href="/#workshops">Day 1 Tracks</Link></li>
              <li><Link href="/#competition">Day 2 Competition</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <ul>
              <li><Link href="/register">Register</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@CampusImpact.in">info@CampusImpact.in</a></li>
              <li><a href="tel:+919876543210">+91 9876543210</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 CampusImpact Workshop · Made with ❤️ for creative students
        </div>
      </div>
    </footer>
  );
}
