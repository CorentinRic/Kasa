import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/pages/Error.css'

function Error() {
  return (
    <section className='section__error'>
      <main className="error">
        <div className="error__container">
          <h1 className='error__container-h1'>404</h1>
          <h2 className="error__container-h2">Oups ! La page que vous demandez n'existe pas.</h2>
          <Link className="error__container-link" to="/">Retourner sur la page d’accueil</Link>
        </div>
      </main>
    </section>
  )
}

export default Error