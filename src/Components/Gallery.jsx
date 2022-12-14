import React from "react";
import Slider from "react-slick";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Gallery = () => {
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  const images = [
    {
      index: 1,
      url: "/images/gallery/1.webp",
      alt: "1",
    },
    {
      index: 2,
      url: "/images/gallery/2.webp",
      alt: "2",
    },
    {
      index: 3,
      url: "/images/gallery/3.webp",
      alt: "3",
    },
    {
      index: 4,
      url: "/images/gallery/4.webp",
      alt: "4",
    },
    {
      index: 5,
      url: "/images/gallery/5.webp",
      alt: "5",
    },
    {
      index: 6,
      url: "/images/gallery/1.webp",
      alt: "1",
    },
    {
      index: 7,
      url: "/images/gallery/2.webp",
      alt: "2",
    },
    {
      index: 8,
      url: "/images/gallery/3.webp",
      alt: "3",
    },
    {
      index: 9,
      url: "/images/gallery/4.webp",
      alt: "4",
    },
    {
      index: 10,
      url: "/images/gallery/5.webp",
      alt: "5",
    },
  ];

  return (
    <div className="row gallery">
      <div className="col-12">
        <div className="heading text-center mb-5">
          <h2 className="mb-3">Gallery</h2>
          <p className="text-white d-flex align-items-center justify-content-center">
            <i className="icon">
              <svg
                data-v-273b70a0=""
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M23.2922 21.0828L19.3258 17.1164C20.1453 15.8813 20.625 14.4023 20.625 12.8125C20.625 8.50469 17.1203 5 12.8125 5C8.50469 5 5 8.50469 5 12.8125C5 17.1203 8.50469 20.625 12.8125 20.625C14.4023 20.625 15.8813 20.1453 17.1164 19.3258L21.0828 23.2922C21.6922 23.9023 22.6828 23.9023 23.2922 23.2922C23.9023 22.682 23.9023 21.693 23.2922 21.0828ZM7.34375 12.8125C7.34375 9.79688 9.79688 7.34375 12.8125 7.34375C15.8281 7.34375 18.2812 9.79688 18.2812 12.8125C18.2812 15.8281 15.8281 18.2812 12.8125 18.2812C9.79688 18.2812 7.34375 15.8281 7.34375 12.8125Z"
                  fill="white"
                ></path>{" "}
                <path
                  d="M16.7188 12.8125C16.7188 13.2438 16.3688 13.5938 15.9375 13.5938H13.5938V15.9375C13.5938 16.3688 13.2438 16.7188 12.8125 16.7188C12.3812 16.7188 12.0312 16.3688 12.0312 15.9375V13.5938H9.6875C9.25625 13.5938 8.90625 13.2438 8.90625 12.8125C8.90625 12.3812 9.25625 12.0312 9.6875 12.0312H12.0312V9.6875C12.0312 9.25625 12.3812 8.90625 12.8125 8.90625C13.2438 8.90625 13.5938 9.25625 13.5938 9.6875V12.0312H15.9375C16.3688 12.0312 16.7188 12.3812 16.7188 12.8125Z"
                  fill="white"
                ></path>
              </svg>
            </i>
            Click on an image to zoom
          </p>
        </div>
      </div>

      <div className="col-12">
        <Slider {...settings}>
          {images.map(({index, url, alt }) => {
            return (
              <Zoom key={index}>
                <img src={url} alt={alt} className="img-fluid" />
              </Zoom>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
