import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Register – CampusImpact Workshop" };

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <h2>Join CampusImpact</h2>
          <p>Create your account to register for workshops and competitions.</p>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your full name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="+91 98765 43210" />
          </div>
          <div className="form-group">
            <label>College</label>
            <input type="text" placeholder="Your college name" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Min. 6 characters" />
          </div>
          <button className="form-submit">Create Account</button>
          <div className="auth-footer">
            Already have an account? <Link href="/login">Login here</Link>
          </div>
        </div>
      </div>
    </>
  );
}
