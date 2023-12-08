import React from 'react';
import './App.css'; // Assuming you have your CSS in App.css

const App: React.FC = () => {
  const handleBlockClick = (blockId: string) => {
    alert(`You clicked on ${blockId}`);
  };

  return (
    <div className="main-container">
      <div className="info-container">
        <div className="info-block goal">
          <h2>Goal</h2>
          <p>Determine what % of customers drop off at each step in the flow (across distribution/retail)</p>
        </div>
        <div className="info-block">
          <h2>Issues?</h2>
          <ul>
            <li>Following user behavior across distribution + retail</li>
            <li>What to do about users who may not follow the funnel exactly?</li>
          </ul>
        </div>
        <div className="info-block">
          <h2>Filters</h2>
          <ul>
            <li>Acquisition channel (organic, search, etc.)</li>
            <li>Campaign (could be distribution or retail</li>
          </ul>
        </div>
      </div>
      <div className="flow-container">
        <div className="row">
          <div className="block" id="home" onClick={() => handleBlockClick('Home')}>Home</div>
          <div className="block" id="offers" onClick={() => handleBlockClick('Offers')}>Offers</div>
          <div className="block" id="other" onClick={() => handleBlockClick('Other')}>Other</div>
        </div>
        <div className="row">
          <div className="block" id="explore" onClick={() => handleBlockClick('Explore')}>Explore</div>
        </div>
        <div className="row">
          <div className="block" id="shop" onClick={() => handleBlockClick('Shop (event): How many drop off here?')}>Shop (event) - Button click to SRP</div>
        </div>
        <div className="row">
          <div className="block bottleneck" id="shop" onClick={() => handleBlockClick('Deals: **FRICTION** How many users drop off here?')}>Deals Selector</div>
        </div>
        <div className="row">
          <div className="block" id="srp" onClick={() => handleBlockClick('SRP')}>SRP</div>
        </div>
        <div className="row">
          <div className="block" id="vdp" onClick={() => handleBlockClick('VDP')}>VDP</div>
        </div>
        <div className="row">
          <div className="block win" id="lead" onClick={() => handleBlockClick('Lead')}>Lead</div>
        </div>
      </div>
      <div className="info-container">
        <div className="info-block bottleneck">
          <h2>Friction!</h2>
          <p>How many drop off here?</p>
        </div>
        <div className="info-block win">
          <h2>Lead: Servco Dealers (& Independents)</h2>
          <ul>
            <li>Start an order</li>
            <li>Request Test Drive</li>
            <li>Save</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default App;

