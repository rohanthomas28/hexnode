import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import chris from "../assets/testimonials/chris-robinson.webp";
import justin from "../assets/testimonials/justin-modrak.webp";
import dalibor from "../assets/testimonials/dalibor-kruljac.webp";
import costco from "../assets/brands/costco.svg";
import gorillas from "../assets/brands/gorillas.svg";
import hilton from "../assets/brands/hilton.svg";
import lowes from "../assets/brands/lowes.svg";
import marriott from "../assets/brands/marriott-intl.svg";
import merck from "../assets/brands/merck.svg";
import polaris from "../assets/brands/polaris.svg";
import saic from "../assets/brands/saic.svg";
import wolt from "../assets/brands/wolt.svg";
import group1_automotive from "../assets/brands/group1-automotive.webp";

const testimonials = [
  {
    image: chris,
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    position: "Technology Coordinator",
    company: "East Troy Community School District",
  },
  {
    image: dalibor,
    quote: "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
  },
  {
    image: justin,
    quote: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    company: "Executive Account Manager, NCS",
  },
];

const companyLogos = [costco, gorillas, hilton, lowes, marriott, merck, polaris, saic, wolt, group1_automotive];

function Testimonial ()  {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const CustomPrevArrow = ({ onClick }) => {
    const isDisabled = hasInteracted && currentIndex === 0;
  
    return (
      <button
        className={`bg-white shadow-md rounded-xl p-3 mx-2 
                    md:absolute md:left-[-70px] md:top-1/2 md:transform md:-translate-y-1/2 
                    flex items-center justify-center z-20
                    ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={!isDisabled ? onClick : undefined}
        disabled={isDisabled}
        aria-label="Previous"
      >
        <ChevronLeft className="text-black w-6 h-6 md:w-8 md:h-8" />
      </button>
    );
  };
  
  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        className={`bg-white shadow-md rounded-xl p-3 mx-2 
                    md:absolute md:right-[-70px] md:top-1/2 md:transform md:-translate-y-1/2 
                    flex items-center justify-center z-20 sm:top-[-70px]
                    ${currentIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onClick}
        disabled={currentIndex === testimonials.length - 1}
        aria-label="Next"
      >
        <ChevronRight className="text-black w-6 h-6 md:w-8 md:h-8" />
      </button>
    );
  };

  const logoSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 100,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablets and down
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "50px", // adjust this for how much side logo is visible
        },
      },
    ],
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipe: true,
    draggable: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    initialSlide: 1,
    beforeChange: (prev, next) => {
      setCurrentIndex(next);
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    },
  };

  return (
    <div className="bg-gray-100 w-full py-10 relative z-10">
      <h2 className="text-center text-black text-4xl md:text-3xl font-bold mb-6 md:my-16 md:text-5xl">
        Why should you choose Hexnode?
      </h2>

      {/* Testimonial Slider */}
      <div className="w-full mx-auto px-2 md:px-4 md:max-w-6xl">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md md:max-w-full mx-auto">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-center rounded-t-xl md:rounded-none"
                    />
                  </div>
                  <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-lg text-black mb-4 italic">
                      "{testimonial.quote}"
                    </h3>
                    <span className="h-[2px] w-full bg-[#F7F7F7] my-4 rounded-[5px]" />
                    <p className="font-bold text-black text-base md:text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 text-black text-xs md:text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Logos */}
      <div className="mt-12 relative px-2 md:px-4 w-full mx-auto md:max-w-6xl">
        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-gray-100 via-gray-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent z-10 pointer-events-none" />

        <Slider {...logoSettings}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center px-4">
              <img
                src={logo}
                alt="Company Logo"
                className="h-20 max-w-[160px] object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;