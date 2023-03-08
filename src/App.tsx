import React from 'react';
import  { useState } from 'react';
import './App.css';

function App() {

  const [current, setCurrent] = useState(0);

  const images = [
    "./images/rcat1.jpg",
    "./images/rcat2.jpg",
    "./images/rcat3.jpg",
    "./images/rcat4.jpg",
    "./images/rcat5.jpg",
    "./images/rcat6.jpg",
    "./images/rcat7.jpg",
    "./images/rcat8.jpg"
  ];

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }



  return (
    <div >
      <h1 className='my-title'> Demo of an Image Carousel </h1>
      <div>

        <div>
          {images.map((image, index) => 
            current === index && (
              <div key={image} className="image-container">
                <div className="left-ball" onClick={prevImage}> <h5 className="arrow"> &#8592; </h5> </div>
                <img src={require(`${image}`)} alt="image"/>
                <div className="right-ball" onClick={nextImage}> <h5 className="arrow"> &#8594; </h5> </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    
  );
}

export default App;
