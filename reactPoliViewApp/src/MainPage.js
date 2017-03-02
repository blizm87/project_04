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
        <div className="main_Container">
          <h1>
            PoliView.com
          </h1>
          <QuoteOfTheDay />
          <div className="pure-g">
            <div className="pure-u-1-3" id="youtubeFrame_Container">
              <YoutubeFrame />
            </div>
            <div className="pure-u-1-3" id="currentEvents_Container">
              <CurrentEvents />
            </div>
            <div className="pure-u-1-3" id="misc_Container">
              <Misc />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
