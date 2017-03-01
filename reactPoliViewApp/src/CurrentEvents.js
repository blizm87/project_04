import React, { Component } from 'react';
import '../public/css/CurrentEvents.css';

class CurrentEvents extends Component {
  render() {
    return (
      <div>
        Current Events
          <section id="newsSectionContainer">
            <article className="newsArticle">
              <p>Author</p>
              <p>Title</p>
              <image src="#" alt="image"/>
              <p>Today Kobe Bryant retired from the Los Angeles Lakers.
                Fans moved by last nights performance.</p>
            </article>
            <article className="newsArticle">
              <p>Author</p>
              <p>Title</p>
              <image src="#" alt="image"/>
              <p>Today Kobe Bryant retired from the Los Angeles Lakers.
                Fans moved by last nights performance.</p>
            </article>
            <article className="newsArticle">
              <p>Author</p>
              <p>Title</p>
              <image src="#" alt="image"/>
              <p>Today Kobe Bryant retired from the Los Angeles Lakers.
                Fans moved by last nights performance.</p>
            </article>
          </section>
      </div>
    );
  }
}

export default CurrentEvents;
