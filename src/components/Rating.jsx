import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ num }) => {

  const stars = Array.from({ length: 5 }, (_, index) => index < num);
  // console.log(stars)

  return (
    <div className='flex gap-1 py-3'>
      {stars.map((isFilled, index) => (
        <FontAwesomeIcon icon={faStar} key={index} color={isFilled ? 'white' : 'gray'}/>
      ))}
    </div>
  );
};

export default Rating