import React from 'react'
import '../styles/components/Host.css'

const Host = ({ host }) => {

    const isHostSplited = host.name.split(" ");
    const [name, lastname] = isHostSplited;

    return (
        <div className="host">
            <div className="host__names">
                <p className="host__firstname">{name.trim()}</p>
                <p className="host__lastname">{lastname.trim()}</p>
            </div>
            <img src={host.picture} alt="Photographie de l'hôte." className="host__img" />
        </div>
    )
}

export default Host