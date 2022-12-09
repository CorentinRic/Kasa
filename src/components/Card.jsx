import React from 'react'
import './../styles/components/Card.css'

const Card = ({ image, title }) => {
  return (

        <article className="card">
          <img className='card__img ' src={image} alt='Bannière'/>
          <div className="card__opacity"></div>
            <h2 className='card__title'>{title}</h2>
        </article>

  )
}

export default Card