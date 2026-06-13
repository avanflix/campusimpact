import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Login – CampusImpact Workshop" };

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <h1>Welcome Back</h1>
          <p>Login to access your dashboard and registrations.</p>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Your password" />
          </div>
          <button className="form-submit">Login</button>
          <div className="auth-footer">
            Don&apos;t have an account? <Link href="/register">Register here</Link>
          </div>
        </div>
      </div>
    </>
  );
}
