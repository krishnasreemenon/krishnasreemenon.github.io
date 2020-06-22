import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import happy from './images/3.jpg';
import desp from './images/6.jpg';

const Happy = styled.div`
  visibility: ${(props) => (props.inView ? 'visible' : 'hidden')};
  transition: all 4s;
  background: url(${happy});
  background-size: 100%;
  background-position-x: center;
  background-position-y: center;
  width: 210px;
  height: 209px;
  position: absolute;
  left: 10px;
  bottom: ${(props) => (props.inView ? '150px' : '-200px')};
  z-index: 20;
  box-shadow: 10px 10px 0px 0px red;
`;

const Desp = styled.div`
  visibility: ${(props) => (props.inView ? 'visible' : 'hidden')};
  transition: all 2s;
  background: url(${desp});
  background-size: 100%;
  background-position-x: center;
  background-position-y: center;
  width: 210px;
  height: 209px;
  position: absolute;
  right: 10px;
  bottom: ${(props) => (props.inView ? '150px' : '-100px')};
  z-index: 20;
  box-shadow: 10px 10px 0px 0px red;
`;

const CallLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  a {
    font-family: monospace;
    color: #000;
    text-decoration: none;
  }
`;

const ThirdPage = () => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scrolling!', window.scrollY);
      if (window.scrollY > 1500) {
        setInView(true);
      } else {
        setInView(false);
      }
    });
  }, []);
  return (
    <div style={{ background: 'white', width: '100vw', height: '100vh' }}>
      <h1 style={{ zIndex: '20' }}>Love You!</h1>
      <CallLink>
        <a href="tel:+917907543259">That's all! Now click here!</a>
      </CallLink>
      <Happy inView={inView} />
      <Desp inView={inView} />
    </div>
  );
};

export default ThirdPage;
