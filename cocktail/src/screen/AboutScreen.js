import React from 'react';
import { Hero, Card } from '../components';
import { valueCards, teamCards } from '../utils/info';
import image from '../assets/image/about-hero.jpg';
import teamImg from '../assets/image/team-img.jpg';
import useTitle from '../useTitle';

const AboutScreen = () => {
  useTitle('About');
  return (
    <>
      <Hero img={image}>
        <section className='about-hero'>
          <div className='about-text'>
            <div className='topline'></div>
            <h3>
              <q>
                Great is the fortune of he who possesses a good bottle, a good
                book, and a good friend.
              </q>
            </h3>
            <div className='underline'></div>
          </div>
        </section>
      </Hero>
      <section className='about-value'>
        <div className='container about-value-content'>
          <h3 className='brand-secondary-color'>OUR PROJECT</h3>
          <div className='card-section'>
            {valueCards.map((card) => {
              return (
                <Card key={card.title} {...card} className={'value-card'} />
              );
            })}
          </div>
        </div>
      </section>
      <section className='about-team'>
        <div
          className='team-img'
          style={{
            background: `url(${teamImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className='about-team-content container'>
          <h3 className='brand-secondary-color'>OUR TEAM</h3>
          {teamCards.map((card) => {
            return <Card key={card.title} {...card} />;
          })}
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
