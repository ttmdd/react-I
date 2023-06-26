import React from 'react';
import Scene from './components/scene/scene';
import './App.css';
import sceneText from './sceneText';


function App() {
  return (
    <div>
      <Scene sceneText={sceneText}/>
    </div>
  );
}

export default App;
