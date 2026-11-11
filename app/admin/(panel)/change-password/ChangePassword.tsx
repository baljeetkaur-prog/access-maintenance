
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import "./ChangePassword.css";

export default function ChangePassword() {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newPassword.length < 12) {
      toast.error("New password must contain at least 12 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation do not match.");
      return;
    }

    if (currentPassword === newPassword) {
      toast.error("Your new password must be different.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Unable to change password.");
        return;
      }

toast.success("Password changed successfully. Please sign in again.");

// Clear all form fields
setCurrentPassword("");
setNewPassword("");
setConfirmPassword("");
setShowPasswords(false);

// Redirect to login
router.replace("/admin/login");
router.refresh();
    } catch {
      toast.error("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="change-password-page">
      <div className="change-password-container">
        <div className="change-password-heading">
          <span className="change-password-eyebrow">
            ACCOUNT SECURITY
          </span>
          <h1>Change Password</h1>
          <p>
            Update your administrator password to keep your account secure.
          </p>
        </div>

        <form className="change-password-card" onSubmit={handleSubmit}>
          <div className="change-password-field">
            <label htmlFor="currentPassword">Current password</label>
            <input
              id="currentPassword"
              type={showPasswords ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="Enter current password"
              required
            />
          </div>

          <div className="change-password-field">
            <label htmlFor="newPassword">New password</label>
            <input
              id="newPassword"
              type={showPasswords ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="At least 12 characters"
              minLength={12}
              required
            />
          </div>

          <div className="change-password-field">
            <label htmlFor="confirmPassword">Confirm new password</label>
            <input
              id="confirmPassword"
              type={showPasswords ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="Re-enter new password"
              minLength={12}
              required
            />
          </div>

          <label className="change-password-show">
            <input
              type="checkbox"
              checked={showPasswords}
              onChange={(e) => setShowPasswords(e.target.checked)}
            />
            Show passwords
          </label>

          <div className="change-password-note">
            Use at least 12 characters and choose a password you do not use
            for another account.
          </div>

          <button
            type="submit"
            className="change-password-submit"
            disabled={loading}
          >
            {loading ? "Updating password..." : "Update password"}
          </button>
        </form>
      </div>
    </main>
  );
}
