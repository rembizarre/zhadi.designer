import React from 'react';
import PortfolioComponent from '../components/Portfolio/PortfolioComp';

const Portfolio = ({ useSetIsContact }) => {
  // to show Footer or not
  useSetIsContact(false);
  return (
    <div className="portfolio">
      <PortfolioComponent />
    </div>
  );
};

export default Portfolio;
