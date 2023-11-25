import React from 'react';
import './css/HomePage.css';
import DogImage from './images/dog.jpg';
import JJKS2 from './images/jjks2.jpg';
import BG3 from './images/bg3.jpg';
import TESLA from './images/tesla.jpg'

const IntroSection = () => {
  return (
    <div className="intro">
      <h1>Welcome to my personal Home Page.</h1>
      <img src={DogImage} width="300px" height="300px" alt="Stylish Dog" />
    </div>
  );
}

const TopicList = ({ className, title, items, image, alt }) => {
  return (
    <div className={className}>
      <div className="title-box">
        <h3>{title}</h3>
      </div>
      <ul>
        {items.map((item, index) => (
          <TopicItem key={index} content={item} />
        ))}
      </ul>
      <img src={image} alt={alt}></img>
    </div>
  );
}

const TopicItem = ({ content }) => {
  return <li>{content}</li>;
}

const HomePage = () => {
  const favoriteShows = [
    "Jujutsu Kaisen",
    "Blue Lock",
    "To Your Eternity",
    "Ranking of Kings",
    "Hunter x Hunter"
  ];

  const favoriteGames = [
    "Baldur's Gate 3",
    "Elden Ring",
    "Honkai: Star Rail",
    "Overwatch 2",
    "League of Legends"
  ];

  const facts = [
    "I am left handed",
    "I own an American Bully named Tesla!",
    "I have never been to other countries",
    "I am the oldest sibling in my family",
    "I commute all the way from Carson!"
  ];

  return (
    <div className="content-container">
      <IntroSection />

      <article className="fun-facts">
        <h2>Here are a few fun facts about myself:</h2>
        <div className="personal-lists">
          <TopicList className="favorite-shows" title="My favorite shows include:" items={favoriteShows} image={JJKS2} />
          <TopicList className="favorite-games" title="Some of my favorite games include:" items={favoriteGames} image={BG3} />
          <TopicList className="hello-list" title="Some surprising things about myself:" items={facts} image={TESLA} />
        </div>
      </article>
    </div>
  )
}

export default HomePage;