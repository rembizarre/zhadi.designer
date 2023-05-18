import React from 'react';
import './PortfolioComp.sass';
import { Link } from 'react-router-dom';
import portfolioTypes from '../../Data/portfolioTypes';

export default function PortfolioComponent() {
  return (
    <div className="portfolioComp">
      <h2 className="portfolioComp__title">ПОРТФОЛИО</h2>
      <div className="portfolioComp__container">
        {/* displaying all portfolio types */}
        {portfolioTypes.map((type, i) => {
          return (
            <Link className="portfolioComp__block" to={'/portfolio/' + type.id}>
              <div className="portfolioComp__wrapper">
                <img
                  src={`./images/${type.name}/${type.name}1.jpg`}
                  alt={type.name + '' + i}
                  className="portfolioComp__img"
                />
              </div>
              <p className="portfolioComp__text">{type.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
