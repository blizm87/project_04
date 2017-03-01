import React, { Component } from 'react';
import QuoteOfTheDay from './QuoteOfTheDay.js';
import YoutubeFrame from './YoutubeFrame.js';
import CurrentEvents from './CurrentEvents.js';
import Misc from './Misc.js';
import '../public/css/MainPage.css';

class MainPage extends Component {
  render() {
    return (
      <div>
        <div className="main_container">
          <h1>
            PoliView.com
          </h1>
          <QuoteOfTheDay />
          <div className="pure-g">
            <div className="pure-u-1-3">
              <YoutubeFrame />
            </div>
            <div className="pure-u-1-3">
              <CurrentEvents />
            </div>
            <div className="pure-u-1-3">
              <Misc />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
