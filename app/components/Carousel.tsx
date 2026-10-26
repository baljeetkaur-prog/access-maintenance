"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

const slides = [
    {
    image: "/images/access-glass-team-960.webp",
    title: " Glass and surface care. Detail that shows.",
    subtitle: "Access Maintenance · Our work in the field",
  },
  {
    image: "/images/access-yard-lineup-960.webp",
    title: "Seasonal readiness. Equipment for the work ahead.",
    subtitle: "Access Maintenance · Our work in the field",
  },
  {
    image: "/images/access-mechanical-testing.jpg",
    title: "Technical maintenance. Hands-on building care.",
    subtitle: "Access Maintenance · Our work in the field",
  },
  {
    image: "/images/access-cleaning.jpg",
    title: "Commercial cleaning. Care for busy spaces.",
    subtitle: "Access Maintenance · Our work in the field",
  },
  {
    image: "/images/access-exterior-repair-960.webp",
    title: "Exterior repairs. Keeping access routes in shape.",
    subtitle: "Access Maintenance · Our work in the field",
  },
   {
    image: "/images/access-hydrovac-site-960.webp",
    title: "Vacuum services. Equipment and crews on site.",
    subtitle: "Access Maintenance · Our work in the field",
  },
     {
    image: "/images/access-green-roof-960.webp",
    title: "Green-roof care. Maintenance above the everyday.",
    subtitle: "Access Maintenance · Our work in the field",
  },
       {
    image: "/images/access-pressure-washing-equipment-960.webp",
    title: "Exterior washing. Prepared for the scope.",
    subtitle: "Access Maintenance · Our work in the field",
  },
         {
    image: "/images/access-building-systems-960.webp",
    title: " Skilled teams. Equipped to reach the work.",
    subtitle: "Access Maintenance · Our work in the field",
  },




  
 
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

const handleSlideChange = (index: number) => {
  setCurrentSlide((index + slides.length) % slides.length);
};

const goToPrevious = () => {
  handleSlideChange(currentSlide - 1);
};

const goToNext = () => {
  handleSlideChange(currentSlide + 1);
};

  return (
    <section className="facility-carousel">
      <div className="facility-carousel-inner">

        {/* LEFT CONTENT */}
        <div className="facility-carousel-content">
          <div className="facility-intro">
            <div className="facility-heading-row">
              <span className="facility-heading-line"></span>

              <span className="facility-small-heading">
                Integrated Facilities Service
              </span>
            </div>

            <h1>Keeping your<br/> facilities moving.</h1>

            <p>
              Technical trades, cleaning, seasonal care, specialty services and construction support. Planned and emergency maintenance coordinated around your site.
            </p>

            <div className="facility-buttons">
              <Link
                href="/contact-us"
                className="facility-primary-button"
              >
                Discuss your facility
              </Link>

              <Link
                href="/services"
                className="facility-secondary-button"
              >
                Explore our services
              </Link>
            </div>
          </div>

          <div className="facility-stats">
            <div className="facility-stat">
              <span>ONE COORDINATED PLAN</span>
            </div>

            <div className="facility-stat">
              <span>YEAR-ROUND SUPPORT</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CAROUSEL */}
        <div className="facility-carousel-image">

          {slides.map((slide, index) => (
            <div
              key={slide.image}
              className={`facility-slide ${
                currentSlide === index ? "active" : ""
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
              />

              <div className="facility-image-overlay"></div>

              <div className="facility-image-content">
                <h2>{slide.title}</h2>
                <span>{slide.subtitle}</span>
              </div>
            </div>
          ))}

          {/* Bottom Controls */}
      {/* Bottom Arrow Controls */}
<div className="facility-carousel-controls">                
  <button
    type="button"
    className="facility-arrow-button"
    onClick={goToPrevious}
    aria-label="Previous slide"
  >
    <FaChevronLeft />
  </button>

  <button
    type="button"
    className="facility-arrow-button"
    onClick={goToNext}
    aria-label="Next slide"
  >
    <FaChevronRight />
  </button>
</div>
        </div>

      </div>
    </section>
  );
}