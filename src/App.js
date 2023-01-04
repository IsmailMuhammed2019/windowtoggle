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
      <button>Toggle WindowTracker</button>
      {show && <windowTracker />}
    </div>
  );
}

export default App;
