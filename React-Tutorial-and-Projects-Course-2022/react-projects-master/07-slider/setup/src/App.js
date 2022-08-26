import React, { useState, useEffect } from "react";
import data from "./data";
import Title from "./Title";
import Slides from "./Slides";
import SliderButtons from "./SliderButtons";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlideHandler();
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const previousSlideHandler = () => {
    const prevSlideIndex = index - 1;

    if (prevSlideIndex < 0) {
      setIndex(people.length - 1);
      return;
    }

    setIndex(prevSlideIndex);
  };

  const nextSlideHandler = () => {
    const nextSlideIndex = index + 1;

    if (nextSlideIndex === people.length) {
      setIndex(0);
      return;
    }

    setIndex(nextSlideIndex);
  };

  return (
    <section className='section'>
      <Title title='reviews' />
      <div className='section-center'>
        <Slides people={people} index={index}/>
        <SliderButtons nextSlide={nextSlideHandler} prevSlide={previousSlideHandler}/>
      </div>
    </section>
  );
}

export default App;
