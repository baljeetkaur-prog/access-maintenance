
import {
  FaMapMarkedAlt,
  FaShieldAlt,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Standards.css";

const standards = [
  {
    icon: FaMapMarkedAlt,
    title: "Planned around your site",
    description:
      "Every property has its own access rules, operating hours and maintenance priorities. We build the scope around those conditions and coordinate crews, equipment and schedules with your team to support daily operations.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe work. Consistent quality.",
    description:
      "Safety planning and clear expectations guide the work. We coordinate site requirements, review progress against the agreed scope and follow through on deficiencies, keeping quality and safe delivery connected from preparation to completion.",
  },
  {
    icon: FaUsers,
    title: "People who take ownership",
    description:
      "Our field crews, supervisors and coordination team stay connected on site requirements and changing priorities. Clients have an accountable point of contact to manage requests, escalate concerns and coordinate the next step.",
  },
  {
    icon: FaClipboardCheck,
    title: "Performance you can see",
    description:
      "Digital work records, photographs and completion reports make service activity easier to follow. FastField and Quickbase help us document delivery, track outstanding items and share the information clients need to review work and plan ahead.",
  },
];

export default function Standards() {
  return (
    <section className="access-standards">
      <div className="access-standards-inner">
        <div className="standards-heading">
          <div className="standards-eyebrow">
            <span className="standards-eyebrow-line"></span>
            <span>The Access standard</span>
          </div>

          <h2>The principles behind our work.</h2>

          <p>
            Practical commitments that shape how we plan, deliver and report
            every scope.
          </p>
        </div>

        <div className="standards-grid">
          {standards.map((standard) => {
            const Icon = standard.icon;

            return (
              <article className="standard-card" key={standard.title}>
                <div className="standard-icon">
                  <Icon aria-hidden="true" />
                </div>

                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
