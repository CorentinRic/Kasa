import React, {useState} from 'react'
import '../styles/components/Carousel.css'
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";

const Carousel = ({slides}) => {

  /* Effet du Carrousel. */
  const [current, setCurrent] = useState(0);
  const length = slides.length

  /* Prochain slide. */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  /* Slide précédent. */
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div className="carousel">
      {slides.map((picture, index) => {
        return (
          <div key={index}
          className={index === current ? "carousel__active-img" : "carousel__inactive-img"}>
            {index === current && (
              <img className="carousel__img" src={picture} alt='Pièces du logements.' />
            )}
          </div>
        )
      }
      )}
      {length > 1 ? (
        <>
          <div className="carousel__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="carousel__previous-icon" />
          </div>
          <div className="carousel__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="carousel__next-icon" />
          </div>
          <p className="indicatif">{current === length - 0 ? 1 : current + 1}/{length}</p>
        </>
      ) : null}
    </div>
  )
}

export default Carousel