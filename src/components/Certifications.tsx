import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera and DeepLearning.AI",
    date: "Dec 2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/SFHS6D666MY5",
    image: "assets/ml.jpeg",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera and DeepLearning.AI",
    date: "May 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/V8YD3VL3FSML",
    image: "assets/deep.jpeg",
  },
  {
    title: "AI School 2024",
    issuer: "NAAMII",
    date: "Dec 2024",
    link: "https://drive.google.com/file/d/1qzhRhcs8nhqIa-ZDXxsF7evWZpLOeb6K/view",
    image: "assets/naamii.png",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
