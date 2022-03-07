import { useState } from 'react';
import './App.scss';
import Tree from './Components/Tree/Tree';

function App() {
  const [isShaked, setIsShaked] = useState(false);

  const handleClick = () => {
    setIsShaked(!isShaked);
  };

  return (
    <div className="App">
      <h1>Tree Shake</h1>
      <Tree isShaked={isShaked}></Tree>
      <div>
        <button onClick={handleClick}>Shake</button>
      </div>
    </div>
  );
}

export default App;
