import React from 'react'
import classes from '../styles/components/Banner.module.css'
import useMediaQuery from '../utils/useMediaQuery'

const Banner = (props) => {

    /* Media queries. */
    const matches = useMediaQuery("(min-width: 600px)");

    return (
            <div className={`${classes.banner} ${props.className}`}>
                {/* Changement de contenu <img /> si la page est supérieur à 600px. */}
                {matches ? <img className={classes.banner__img} src={props.image} alt={props.alt} /> : <img className={classes.banner__img} src={props.imageMobile} alt={props.alt} />}
                <h1 className={classes.banner__h1}>{props.title}</h1>
            </div>
    )

}

export default Banner