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
  WishButton,
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
            This montha is a jinn! It will sing you songs and grant you wishes. Click the below button to ask for a wish!
            <br />
            <WishButton href="https://telegram.me/RahulAKrishna">
              Wish!
            </WishButton>
          </PromiseText>
        </Promise>
      </Wrapper>
    );
  }
}

export default App;
