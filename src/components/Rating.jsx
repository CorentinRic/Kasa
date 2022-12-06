import React from 'react'
import '../styles/components/Rating.css'
import starlight from '../assets/images/star-light.svg'
import starprimary from '../assets/images/star-primary.svg'

const Rating = ({ rating }) => {

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
            {stars.map((star) => rating >= star ? (
          <img key={star.toString()} className="rating__icon" src={starprimary} alt="" />
        ) : (
          <img key={star.toString()} className="rating__icon" src={starlight} alt="" />
        )
      )}
    </div>
  )
}

export default Rating