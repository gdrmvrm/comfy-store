import axios from 'axios';

const productionUrl = import.meta.env.VITE_API_URL;

export const customFetch = axios.create({
  baseURL: productionUrl
});

export const formatPrice = (price) => {
  const formattedAmount = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format((price / 100).toFixed(2));

  return formattedAmount;
};
