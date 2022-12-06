import React, {useState} from 'react'
import '../styles/components/Accordion.css'
import {IoIosArrowUp} from 'react-icons/io'

const Accordion = ({ content, title }) => {

  /* Effet collapse */
  const [activeCollapse, setActiveCollapse] = useState(false)

  const handleToggle = e => {
    setActiveCollapse(!activeCollapse)
  }

  return (

        <article className={`accordion ${activeCollapse && "activeCollapse"}`}>
            <div className="accordion__title" onClick={handleToggle}>
                <h3 className='accordion__title-h3'>{title}</h3>
                <span className='accordion__icon'><IoIosArrowUp /></span>
            </div>
            <div className="accordion__content">
              {/* Si les données sont dans un tableau, il retourne le contenu "accordion__list".
              Sinon, il retourne la balise p "accordion__content-p". */}
              {Array.isArray(content) ? (
                <ul className="accordion__list">
                  {content.map((equipment, index) => (
                    <li key={index} className="collapse__list-element">
                      {equipment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="accordion__content-p">{content}</p>
              )}
            </div>
        </article>
  )
}

export default Accordion