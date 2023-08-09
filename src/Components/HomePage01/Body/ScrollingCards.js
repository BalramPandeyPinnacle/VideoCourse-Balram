import React, { useRef } from 'react';
import './ScrollingCards.css';
import {AiFillLeftCircle,AiFillRightCircle} from "react-icons/ai"

const ScrollingCards = () => {
  const cardData = [
    {
      id: 1,
      title: 'Course 1',
      imageUrl: '/image/Book01.png',
      description: 'Description of Card 1',
      rating: 4.5,
      price: '999',
      fprice: "2999",
    },
    {
      id: 2,
      title: 'Course 2',
      imageUrl: '/image/Book01.png',
      description: 'Description of Card 2',
      rating: 3.8,
      price: '549',
      fprice: "999",
    },
    {
      id: 3,
      title: 'Course 3',
      imageUrl: '/image/Book01.png',
      description: 'Description of Card 3',
      rating: 4.2,
      price: '999',
      fprice: "2999",
    },
    {
      id: 4,
      title: 'Course 4',
      imageUrl: '/image/Book01.png',
      description: 'Description of Card 4',
      rating: 4.0,
      price: '499',
      fprice: "999",
    },
    {
      id: 5,
      title: 'Course  5',
      imageUrl: '/image/Book01.png',
      description: 'Description of Card 5',
      rating: 4.7,
      price: '999',
      fprice: "2999",
    },
    {
      id: 6,
      title: 'Course 6',
      imageUrl: '/image/Book01.png',
      description: 'Description of Card 6',
      rating: 4.3,
      price: '455',
      fprice: "2999"
    },
    {
      id: 7,
      title: 'Course  7',
      imageUrl: '/image/Book01.png',
      description: 'Description of Card 7',
      rating: 4.6,
      price: '999',
      fprice: "2999",
    },
    {
        id: 7,
        title: 'Course 8',
        imageUrl: '/image/Book01.png',
        description: 'Description of Card 7',
        rating: 4.6,
        price: '999',
        fprice: "2999",
      },
      {
        id: 7,
        title: 'Course 9',
        imageUrl: '/image/Book01.png',
        description: 'Description of Card 7',
        rating: 4.6,
        price: '999',
        fprice: "2999",
      },
      {
        id: 7,
        title: 'Course 10',
        imageUrl: '/image/Book01.png',
        description: 'Description of Card 7',
        rating: 4.6,
        price: '999',
        fprice: "2999",
      },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='ScrollingCards'>
      <button onClick={scrollLeft} className='slider-button-left'><AiFillLeftCircle size={40}/></button>
      <div className="scroll-container" ref={scrollRef}>
        <div className="card-wrapper">
          {cardData.map(card => (
            <div key={card.id} className="card">
              <img src={card.imageUrl} alt={card.title}  />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="card-details">
                <div className="rating">{card.rating}</div>
                <div className="price"> &#8377;{card.price}</div>
                <div className="price"><s> &#8377;{card.fprice}</s></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={scrollRight} className='slider-button-right'><AiFillRightCircle size={40}/></button>
    </div>
  );
};

export default ScrollingCards;
