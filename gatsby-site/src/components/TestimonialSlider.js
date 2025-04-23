/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
/* eslint-enable no-unused-vars */
import './testimonials.css'; // Your custom styles

// Slick slider CSS (make sure these are included somewhere in your project)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost/wordpress-headless-1/wp-json/wp/v2/testimonial') // change to match your WP REST URL
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading testimonials', err);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (loading) return <p>Loading testimonials...</p>;
  if (!testimonials.length) return <p>No testimonials found.</p>;

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <h3>{testimonial.title.rendered}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: testimonial.content.rendered,
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
