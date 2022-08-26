import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function SliderButtons(props) {
  function previousSlideHandler() {
    props.prevSlide();
  }

  function nextSlideHandler() {
    props.nextSlide();
  }

  return (
    <>
      <button className='prev' onClick={previousSlideHandler}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={nextSlideHandler}>
        <FiChevronRight />
      </button>
    </>
  );
}

export default SliderButtons;
