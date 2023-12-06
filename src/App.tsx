import React from 'react';
import './App.css'; // Assuming you have your CSS in App.css

const App: React.FC = () => {
  const handleBlockClick = (blockId: string) => {
    alert(`You clicked on ${blockId}`);
  };

  return (
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
        <div className="block" id="stop" onClick={() => handleBlockClick('Stop')}>Stop (event)</div>
      </div>
      <div className="row">
        <div className="block" id="deals" onClick={() => handleBlockClick('Deals')}>Deals Selector</div>
      </div>
      <div className="row">
        <div className="block" id="srp" onClick={() => handleBlockClick('SRP')}>SRP</div>
      </div>
      <div className="row">
        <div className="block" id="vdp" onClick={() => handleBlockClick('VDP')}>VDP</div>
      </div>
      <div className="row">
        <div className="block" id="lead" onClick={() => handleBlockClick('Lead')}>Lead</div>
      </div>
    </div>
  );
};

export default App;

