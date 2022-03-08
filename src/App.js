import React, { useState } from 'react';
import './App.scss';
import AppleTree from './Components/Tree/AppleTree';

function App() {
  const [isShaked, setIsShaked] = useState(false);

  const handleClick = () => {
    setIsShaked(!isShaked);
  };

  return (
    <React.Fragment>
      <div className="App">
        <h1>Tree Shake</h1>
        <AppleTree isShaked={isShaked}></AppleTree>
        <button onClick={handleClick}>Button</button>
      </div>
    </React.Fragment>
  );
}

export default App;
