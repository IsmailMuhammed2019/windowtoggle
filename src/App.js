import React from 'react'
import './App.css';
import WindowTracker from './WindowTracker'

function App() {
  const [show, setShow] =React.useState(true)

  function toggle() {
    setShow(prev => !prev)
  }
  return (
    <div className="App">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
