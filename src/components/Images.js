import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './images/1.jpg';
import imageTwo from './images/2.jpg';
import imageThree from './images/3.jpg';
import imageFour from './images/4.jpg';
import imageFive from './images/5.jpg';
import imageSix from './images/6.jpg';
import imageSeven from './images/7.jpg';
import imageEight from './images/8.jpg';

const style = {
  maxWidth: '100%'
};

const Images = () => (
  <div>
    <Carousel slidesPerPage={2} infinite keepDirectionWhenDragging arrows>
      <img src={imageOne} alt="Stay hot!" style={style} />
      Stay hot!
      <img src={imageTwo} alt="And cute!" style={style} />
      And cute!
      <img src={imageThree} alt="And stupid!" style={style} />
      And stupid!
      <img src={imageFour} alt="And affectionate!" style={style} />
      And affectionate!
      <img
        src={imageFive}
        alt="With all the people we care about!"
        style={style}
      />
      With all the people we care about!
      <img src={imageSix} alt="..." style={style} />
      ....
      <img src={imageSeven} alt="And keep hugging me!" style={style} />
      And keep hugging me!
      <img src={imageEight} alt="I Love you!" style={style} />I Love you!
    </Carousel>
  </div>
);

export default Images;
