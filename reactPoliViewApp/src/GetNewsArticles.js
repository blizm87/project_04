import React, { Component } from 'react';

const GetNewsArticles = ({newsCatagory}) => {
    const API_KEY = '5bfcf544abf743e0985517c98f5dcefa';
    let url = `https://newsapi.org/v1/articles?source=${newsCatagory}&sortBy=top&apiKey=${API_KEY}`;
    fetch(url).then( res => res.json() ).then( data => {
      console.log('I am the catagory: ' + newsCatagory)
      console.log('I am the data: ' + data)
      let articleFeed = data.articles.map((article, i) =>
        <article className="newsArticle"  key={i}>
          <p key={i}>{article.author}</p>
          <p key={i}>{article.title}</p>
          <image  key={i} src={article.urlToImage} alt="I didn't work"/>
          <p key={i}>{article.description}</p>
        </article>
      );
      console.log('I am the article feed: ' + articleFeed)
      return (
        <div>
          {articleFeed}
        </div>
      )
    });
}

export default GetNewsArticles;


