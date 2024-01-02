import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      text: "I was impressed with Michael's skills and professionalism.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      text: "Working with Michael was a game-changer for our project. His expertise and dedication are unmatched.",
      rating: 4,
    },
    {
      name: "Bob Johnson",
      text: "Michael is not just a developer; he's a problem solver. His solutions are both innovative and efficient.",
      rating: 5,
    },
    {
      name: "Alice Brown",
      text: "It's rare to find a developer who combines technical know-how with excellent communication skills. Michael excels in both.",
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-container">
      <Slider {...sliderSettings}>
        {testimonials.map((value, index) => (
          <div key={index} className="testimonial-card">
            <div className="card shadow d-flex flex-column">
              <div className="stars">{renderStars(value.rating)}</div>
              <span className="description">{value.text}</span>
              <span className="name">{value.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

