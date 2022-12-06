import React, { useEffect, useState } from 'react'
import classes from '../styles/components/Banner.module.css'

const Banner = (props) => {

    /* Media queries. */
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])

    return (
            <div className={`${classes.banner} ${props.className}`}>
                {/* Changement de contenu <img /> si la page est supérieur à 600px. */}
                {size < 600 ? <img className={classes.banner__img} src={props.imageMobile} alt={props.alt} /> : <img className={classes.banner__img} src={props.image} alt={props.alt} />}
                <h1 className={classes.banner__h1}>{props.title}</h1>
            </div>
    )

}

export default Banner