import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0]?.offsetWidth || 0;
      const gap = 16; // space-x-4 = 1rem = 16px
      carouselRef.current.scrollTo({
        left: currentSlide * (slideWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl '>
          Comfort at home starts here.
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          Explore hand-picked sofas, tables and home pieces crafted to make
          every room feel like home. Shop quality furniture built for comfort,
          style and your everyday life.
        </p>
        <div className='mt-10 '>
          <Link to='products' className='btn btn-primary'>
            Our Products
          </Link>
        </div>
      </div>

      <div
        ref={carouselRef}
        className='hidden h-[28rem] lg:carousel carousel-center
       p-4 space-x-4 bg-neutral rounded-box'
      >
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
