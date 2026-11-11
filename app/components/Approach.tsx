"use client";

import "./Approach.css";

const approachSteps = [
  {
    number: "01",
    title: "Understand the site",
    description:
      "Start with your assets, operating hours, access requirements and priorities.",
  },
  {
    number: "02",
    title: "Build the plan",
    description:
      "Define the scope, schedule, people and approval process.",
  },
  {
    number: "03",
    title: "Coordinate the work",
    description:
      "Bring the right service resources together and keep your team informed.",
  },
  {
    number: "04",
    title: "Close the loop",
    description:
      "Document completion, photographs, exceptions and next actions.",
  },
];

export default function Approach() {
  return (
    <section className="approach-section">
      <div className="approach-container">

        <div className="approach-heading">
          <div className="approach-eyebrow">
            <span className="approach-eyebrow-line"></span>
            <span>The Access approach</span>
          </div>

          <h2>
            Clear scope. Coordinated delivery.
          </h2>
        </div>

        <div className="approach-steps">
          {approachSteps.map((step) => (
            <div className="approach-step" key={step.number}>

              <div className="approach-step-line"></div>

              <span className="approach-step-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}