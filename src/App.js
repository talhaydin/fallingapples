import React, { useState } from 'react';
import './App.scss';
import AppleTree from './Components/Tree/AppleTree';

function App() {
  const [isShaked, setIsShaked] = useState(false);

  const handleClick = () => {
    /* on button click, reverse the "shaked" local boolean state  */
    setIsShaked(!isShaked);
  };

  return (
    <React.Fragment>
      <div className="App">
        <h1>Tree Shake</h1>
        <AppleTree isShaked={isShaked}></AppleTree>{' '}
        {/*  pass down isshaked local state to lower level components */}
        <button onClick={handleClick} className="shakeBtn">
          Shake!
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
