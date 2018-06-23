import React, { Component } from 'react';
import {
  Wrapper,
  HappyBirthday,
  KannumKannum,
  KannumText,
  Kallyanam,
  KallyanamText,
  Promise,
  PromiseText,
} from './styles/main';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <HappyBirthday>
          Happy Birthday!
        </HappyBirthday>
        <KannumKannum>
          <KannumText>
            Nammakku Kannum Kannum Nokki Irikka!
          </KannumText>
        </KannumKannum>
        <Kallyanam>
          <KallyanamText>
            Eniittu Kallyanam Kazhikka!
          </KallyanamText>
        </Kallyanam>
        <Promise>
          <PromiseText>
            Oru 100 divasam 100 pattu paadi tharatte?!
          </PromiseText>
        </Promise>
      </Wrapper>
    );
  }
}

export default App;
