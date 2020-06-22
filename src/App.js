import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

const App = () => (
  <ReactFullpage
    scrollBar={true}
    render={({ state, fullPageApi }) => {
      return (
        <div>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <SecondPage />
          </div>
          <div className="section">
            <ThirdPage />
          </div>
        </div>
      );
    }}
  />
);

export default App;
