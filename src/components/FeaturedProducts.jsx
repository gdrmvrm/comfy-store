import React from 'react';
import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
      <div>
        <SectionTitle text='featured products' />
        <ProductsGrid />
      </div>
    </div>
  );
};

export default FeaturedProducts;
