import React from 'react';

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div
              className='stat-title text-primary-content text-xl font-bold tracking-widest'
              style={{ fontFamily: 'Pacifico, cursive' }}
            >
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-5xl mx-auto'>
        Our Story Born from a passion for timeless design and everyday comfort,
        Comfy Store started as a small project to curate furniture that blends
        quality, affordability and personality. We wanted to make it easy for
        people to build living spaces they love — whether that’s a cozy reading
        nook, a family dining room, or a modern lounge. What We Stand For
        Thoughtfully chosen products — we hand-select each item for durability,
        design and value. Transparent pricing — honest prices so you know you’re
        getting real value without compromise. Customer satisfaction — we aim to
        make the shopping experience smooth and enjoyable, from browsing to
        delivery. Your Home, Your Way Explore our range and find pieces that fit
        your taste and lifestyle. We believe comfort isn’t just a luxury — it’s
        everyday living.
      </p>
    </>
  );
};
export default About;
