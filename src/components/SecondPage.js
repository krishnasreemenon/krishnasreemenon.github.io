import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import secondImage from './images/8.jpg';
import graduation from './images/2.jpg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: 500px) {
    height: 90vh;
  }
  background: url(${secondImage});
  background-size: 100%;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-color: #420e10;
`;

const Heading = styled.h5`
  width: 100%;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  color: #c51c0e;
  position: absolute;
  top: 30px;
  /* right: 100px; */
  font-size: 34px;
  background: rgba(0, 0, 0, 0.5);
`;

const bottomValues = {
  before: '-100px',
  present: '200px',
  after: '-200px',
};

const FlexCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: all 0.5s;
  bottom: ${(props) => bottomValues[props.inView]};
  z-index: 2;
`;

const Graduation = styled.div`
  background: url(${graduation});
  width: 276px;
  height: 224px;
  position: absolute;
  /* z-index: 1000; */
  background-size: 100%;
  box-shadow: 10px 10px 0px 0px red;
`;

const Description = styled.div`
  visibility: ${(props) => (props.inView === 'present' ? 'visible' : 'hidden')};
  transition: all 0.5s;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: ${(props) => (props.inView === 'present' ? '100%' : '0px')};
  justify-content: center;
  align-items: center;
  p {
    color: white;
    background: rgba(0, 0, 0, 0.5);
    font-family: monospace;
    font-size: 14px;
    text-align: center;
  }
`;

const SecondPage = () => {
  const [inView, setInView] = useState('before');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scrolling!', window.scrollY);
      if (window.scrollY > 600 && window.scrollY < 1000) {
        setInView('present');
      } else if (window.scrollY < 600) {
        setInView('before');
      } else {
        setInView('after');
      }
    });
  }, []);
  return (
    <Container>
      <Heading>
        Crappy Year! <br /> But you're here!
      </Heading>
      <Description inView={inView}>
        <p>
          You got way too drunk for a person who's just a year into legal
          drinking age!
        </p>
      </Description>
      <FlexCenter inView={inView}>
        <Graduation />
      </FlexCenter>
    </Container>
  );
};

export default SecondPage;
