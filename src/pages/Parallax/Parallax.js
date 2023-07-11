import React from 'react'
import "./Parallax.scss"
function Parallax() {
  return (
    <div className='parallax-wrapper'>
<div className="body-wrapper">
  <header>
    <div className="container">
      <h1>Pure CSS Parallax Scrolling</h1>
    </div>
  </header>

  <section className="container parallax">
    <div className="background"></div>
    <div className="foreground"></div>
    <h2>Keep Scrolling</h2>
  </section>

  <section className="content-wrapper">
    <div className="container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur 
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur 
      </p>
    </div>
  </section>

  <section className="container parallax">
    <div className="background reverse"></div>
    <div className="foreground reverse"></div>
    <h2>The End!</h2>
  </section>
</div>
</div>
  )
}

export default Parallax