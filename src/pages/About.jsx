import React from 'react'
import '../styles/pages/About.css'
import Accordion from '../components/Accordion';
import products from './../datas/DataAbout.json'
import Banner from '../components/Banner';
import bannerImg from '../assets/images/banner-about.jpg'
import bannerImgMobile from '../assets/images/banner-about-mobile.jpg'

const About = () => {
  return (
    <section className='section__about'>
      <main className="about">
      {/* Bannière */}  
      <Banner
        className="mobile__banner"
        title=""
        image={bannerImg}
        imageMobile={bannerImgMobile}
        alt="La montagne."
        >
        </Banner>
        <div className="about__container">
        {/* Accordéons */} 
        {products.map((product) => {
            return (
              <Accordion key={product.id} content={product.content} title={product.title}/>
            )
          }
        )}
        </div>
      </main>
    </section>
  )
}

export default About