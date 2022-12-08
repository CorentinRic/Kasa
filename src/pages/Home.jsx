import React from "react";
import './../styles/pages/Home.css'
import Card from "../components/Card";
import lodgings from './../datas/ListLogements.json'
import Banner from "../components/Banner";
import bannerImg from './../assets/images/banner.avif'
import bannerImgMobile from '../assets/images/banner-mobile.avif'
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <section>
      <main className="home">
        {/* Bannière */}
        <Banner         
        title="Chez vous, partout et ailleurs"
        image={bannerImg}
        imageMobile={bannerImgMobile}
        alt="La côte et ses falaises."
        >
        </Banner>
        <div className="home__container">
          <div className="home__cards">
          {/* Cartes de logements cliquables. */}
          {lodgings.map((lodging) => {
            return (
              <article key={lodging.id}>
                <Link to={`/lodging/${lodging.id}`}>
                  <Card image={lodging.cover} title={lodging.title}/>
                </Link>
              </article> 
            )
          }
        )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Home;