import React from 'react'

export default function Carousel() {
  return (



<div>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img style={{"height" : "500px" }} src="https://www.eatingwell.com/thmb/UVI-NfsrXfBJ1m54bToy9Qwdmsg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg" className="d-block w-100" alt="..."></img>
    
    </div>
    <div className="carousel-item">
    <img style={{"height": "500px" }} src="https://media.istockphoto.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=D1z4xPCs-qQIZyUqRcHrnsJSJy_YbUD9udOrXpilNpI=" className="d-block w-100" alt="..."></img>
      
    </div>
    <div className="carousel-item">
    <img style={{"height" :"500px" }} src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg" className="d-block w-100" alt="..."></img>
    
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



</div>
  )
}
