import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <main className='grid min-h-screen place-items-center px-8'>
      {error.status === 404 ? (
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary mb-4'>404</p>
          <h1
            className='mb-4 text-3xl font-bold tracking-tight 
          sm:text-5xl'
          >
            Page not found
          </h1>
          <p className='text-lg leading-7 mb-10'>
            We can't seem to find the page you're looking for
          </p>
          <div>
            <Link to='/' className='btn btn-secondary'>
              Go back home
            </Link>
          </div>
        </div>
      ) : (
        <h4 className='text-center font-bold text-3xl'>
          there was an error...
        </h4>
      )}
    </main>
  );
};

export default Error;
