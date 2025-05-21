import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";

const Freebook = () => {
  const [book , setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book`);
        setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  }, []);
  const filteredData = book.filter((item) => item.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-4">
        <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatem ea, laudantium est eum consequatur eaque, dolor asperiores vitae veritatis quam voluptates tenetur quas quidem.</p>
        </div>

      <div>
      <Slider {...settings}>
        {filteredData.map((item) => (
         <Cards item={item} key={item.id} />
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
