import styled from 'styled-components';
import background from '../images/background.jpeg';
import kannum_kannum from '../images/kannum_kannum.jpg';
import kallyanam from '../images/kallyanam.jpg';
import sundaramukham from '../images/sundaramukham.jpg';

export const Wrapper = styled.div`
  background: url(${background}) #21140D;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  @media (max-width: 900px) {
    background-position: -200px 0px;
  }
  background-attachment: fixed;
`;

export const HappyBirthday = styled.div`
  font-family: 'Pacifico', cursive;
  color: #fff;
  font-size: 64px;
  position: fixed;
  top: 10px;
  right: 100px;
  text-align: right;
  height: 100vh;
  @media(max-width: 900px) {
      right: 0px;
      width: 100vw;
      text-align: center;
  }
`;

export const KannumKannum = styled.div`
  position: absolute;
  top: 100vh;
  background: url(${kannum_kannum}) #0A3430;
  height: 100vh;
  width: 100vw;
  background-size: 100%;
  background-repeat: no-repeat;
  color: #fff;
`;

export const KannumText = styled.div`
  font-family: 'Pacifico', cursive;
  font-size: 64px;
  text-align: center;
  position: absolute;
  bottom: 10px;
  width: 100vw;
`;

export const Kallyanam = styled.div`
  position: absolute;
  top: 200vh;
  height: 100vh;
  width: 100vw;
  background: url(${kallyanam});
  background-size: 100%;
  background-repeat: no-repeat;
`

export const KallyanamText = styled.div`
  font-family: 'IM Fell English SC', serif;
  text-align: center;
  font-size: 64px;
  position: absolute;
  bottom: 10px;
  background: rgba(255,255,255,0.5);
  width: 100vw;
`;

export const Promise = styled.div`
  position: absolute;
  top: 300vh;
  height: 100vh;
  width: 100vw;
  background: url(${sundaramukham}) #AFB467;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const PromiseText = styled.div`
  font-family: 'IM Fell English SC', serif;
  text-align: center;
  font-size: 32px;
  position: absolute;
  bottom: 10px;
  background: rgba(255,255,255,0.5);
  width: 100vw;
`;

export const WishButton = styled.a`
  
`;
