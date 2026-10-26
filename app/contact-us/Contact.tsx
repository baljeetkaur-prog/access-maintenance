"use client";

import Link from "next/link";
import "./Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
const [submitting, setSubmitting] = useState(false);


async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const recaptchaToken = recaptchaRef.current?.getValue();

  if (!recaptchaToken) {
    toast.error("Please complete the reCAPTCHA verification.");
    return;
  }

  const form = event.currentTarget;
  const formData = new FormData(form);

  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    location: String(formData.get("location") ?? ""),
    service: String(formData.get("service") ?? ""),
    timing: String(formData.get("timing") ?? ""),
    requirements: String(formData.get("requirements") ?? ""),
    recaptchaToken,
  };

  setSubmitting(true);

  try {
    const response = await fetch("/api/admin/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Unable to submit your inquiry.");
    }

    toast.success("Your inquiry has been submitted successfully!");

    form.reset();
    recaptchaRef.current?.reset();
  } catch (error) {
    toast.error(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );

    recaptchaRef.current?.reset();
  } finally {
    setSubmitting(false);
  }
}


  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div className="contact-hero-heading">
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-line"></span>
              <span>Contact Access</span>
            </div>

            <div className="contact-hero-grid">
              <h1>Tell us about your site.</h1>

              <div className="contact-hero-side">
                <p>
                  Start with the services you need, the location and your
                  priorities. We’ll help turn that into a clear next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          <div className="contact-info">
            <div className="contact-info-eyebrow">
              <span className="contact-info-eyebrow-line"></span>
              <span>Speak with our team</span>
            </div>

            <a
              href="tel:+18665193436"
              className="contact-phone"
            >
              866 519 3436
            </a>

            <a
              href="mailto:info@accessmaintenance.ca"
              className="contact-email"
            >
              info@accessmaintenance.ca
            </a>

            <div className="contact-info-content">
              <h2>Service inquiries</h2>

              <p>
                Commercial, public, transit and industrial properties across
                Ontario.
              </p>

              <h3>Need urgent support?</h3>

              <p>
                Call to confirm assistance. Existing clients should use their
                assigned service contact and escalation arrangements.
              </p>

              <h3>Useful to include</h3>

              <p>
                Site address, photographs, asset details, access restrictions
                and your preferred timing.
              </p>
            </div>
          </div>

          <div className="contact-form-box">
            <div className="contact-form-eyebrow">
              <span className="contact-form-eyebrow-line"></span>
              <span>Tell us what your site needs</span>
            </div>

            <h2>Start a conversation.</h2>

         <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Work email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Work email"
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="location">Site location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City and property address"
                />
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="service">Service required</label>
                  <select id="service" name="service" defaultValue="">
                    
<option value="">Select a service</option>
<option value="integrated-facilities">
  Integrated Facilities Service
</option>
<option value="technical-trades">
  Technical &amp; Trade Services
</option>
<option value="electrical">Electrical</option>
<option value="plumbing">Plumbing</option>
<option value="hvac">HVAC</option>
<option value="handyman">Handyman</option>
<option value="emergency-services">Emergency Services</option>
<option value="snow-ice-management">
  Snow &amp; Ice Management
</option>
<option value="grounds-landscape">
  Grounds &amp; Landscape Maintenance
</option>
<option value="cleaning-janitorial">
  Cleaning &amp; Janitorial Services
</option>

                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="timing">Your timing</label>
                  <select id="timing" name="timing" defaultValue="">
                   <option value="">Select timing</option>
<option value="planned-work">
  Planned work / quotation
</option>
<option value="recurring-programme">
  Recurring service programme
</option>
<option value="urgent-requirement">
  Urgent requirement — call first
</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="requirements">
                  Scope and requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  placeholder="What needs to be done? Including timing, site access and any operating constraints."
                ></textarea>
              </div>

            <p className="contact-form-note">
  We’ll review your requirements and get back to you with the next steps.
</p>
<div className="contact-recaptcha">
  <ReCAPTCHA
    ref={recaptchaRef}
    sitekey="6Lfoc-YtAAAAAAeOTOtvuGR2nDSc0QpsUSUL7llg"
  />
</div>

<button type="submit" className="contact-submit" disabled={submitting}>
    {submitting ? "Sending..." : "Send Message"}
</button>
            </form> 
          </div>
        </div>
      </section>
    </main>
  );
}