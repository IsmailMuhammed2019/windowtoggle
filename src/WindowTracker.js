import React from 'react';

export default function WindowTracker() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', function(){
      setWindowWidth(window.innerWidth);
    });
  }, []);


  return (
    <div>
      <h1>Window Height: {windowWidth}</h1>
    </div>
  )
}
