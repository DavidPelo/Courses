import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(people[0]);

  const previousReviewHandler = () => {
    const prevReviewIndex = people.indexOf(review) - 1;

    if (prevReviewIndex < 0) {
      setReview(people[people.length - 1]);
      return;
    }

    setReview(people[prevReviewIndex]);
  };

  const nextReviewHandler = () => {
    const nextReviewIndex = people.indexOf(review) + 1;

    if (nextReviewIndex === people.length) {
      setReview(people[0]);
      return;
    }

    setReview(people[nextReviewIndex]);
  };

  const randomReviewHandler = () => {
    const randomNum = Math.floor(Math.random() * people.length);
    const randomReview = people[randomNum];
    setReview(randomReview);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={review.image} alt={review.name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{review.name}</h4>
      <p className='job'>{review.job}</p>
      <p className='info'>{review.text}</p>
      <div>
        <button className='prev-btn' onClick={previousReviewHandler}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReviewHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReviewHandler}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
