import React from 'react'
import {useParams, Navigate} from "react-router-dom";
import '../styles/pages/Lodging.css'
import lodgings from '../datas/ListLogements.json'
import Carousel from '../components/Carousel'
import Tag from '../components/Tag';
import Accordion from '../components/Accordion'
import Host from '../components/Host';
import Rating from '../components/Rating';

const Lodging = () => {

  /* Comparaison de l'id. */

  const { id } = useParams()
  const house = lodgings.find((item) => item.id === id)

  if (!house) 
    return <Navigate to="/*" />

  return (
    <section>
      <main className="lodging">
        {/* Carrousel */}
        <Carousel slides={house.pictures}/>
        <div className="lodging__container">
          <div className="lodging__titles">
            <h1>{house.title}</h1>
            <h2>{house.location}</h2>
            <div className="lodging__tags">
              {/* Tags */}
              {house.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          {/* Informations hôte. */}
          <div className="lodging__host">
              <Host host={house.host}/>
              <Rating rating={house.rating}/>
          </div>
        </div>
        {/* Accordéons. */}
        <div className="lodging__accordions">
          <div className='lodging__accordion'>
            <Accordion title="Description" content={house.description}/>
          </div>
          <div className='lodging__accordion'>
            <Accordion title="Équipements" content={house.equipments}/>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Lodging