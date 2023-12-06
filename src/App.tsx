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



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
