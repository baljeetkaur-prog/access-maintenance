"use client";

import "./TeamSection.css";

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-grid">
          <div className="team-image">
            <img
              src="/images/team_img.jpeg"
              alt="Access Maintenance team"
            />
          </div>

          <div className="team-content">
            <div className="team-eyebrow">
              <span className="team-eyebrow-line"></span>
              <span>People. Performance. Partnership.</span>
            </div>

            <h2>
              The people behind
              <br />
              better buildings.
            </h2>

     <p className="team-description">
  At Access Maintenance, we bring people, practical expertise and dependable
  service together to keep buildings running smoothly. Our team works closely
  with clients to understand their facilities, respond to maintenance needs
  and support the long-term performance of every property we serve.
</p>

<p className="team-description team-description-secondary">
  From day-to-day maintenance to planned improvements, we focus on practical
  solutions, clear communication and consistent service. By building strong
  working relationships and taking a proactive approach, we help clients
  maintain safe, functional and well-managed spaces for the people who use
  them every day.
</p>
          </div>
        </div>
      </div>
    </section>
  );
}