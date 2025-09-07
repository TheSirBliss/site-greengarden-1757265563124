import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {"author": "Mario Rossi", "quote": "Servizio eccellente e professionale!"},
  {"author": "Anna Bianchi", "quote": "Il mio giardino non è mai stato così bello."},
  // Add more testimonials here...
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const TestimonialCarousel = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-primary mb-4">Testimonianze</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic text-lg">"{testimonial.quote}"</p>
            <p className="text-gray-900 font-bold mt-2">- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;