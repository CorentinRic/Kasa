import React from 'react'
import '../styles/components/Host.css'

const Host = ({ host }) => {

    const isHostSplited = host.name.split(" ");
    const [name, lastname] = isHostSplited;

    return (
        <div className="host">
            <div className="host__names">
                <h4 className="host__firstname">{name.trim()}</h4>
                <h4 className="host__lastname">{lastname.trim()}</h4>
            </div>
            <img src={host.picture} alt="Photographie de l'hôte." className="host__img" />
        </div>
    )
}

export default Host