import React from "react";
import Tour from "./Tour";
const Tours = props => {
  const deleteTourHandler = id => {
    props.deleteTour(id);
  };

  const renderTours = () => {
    return (
      <div>
        {props.tours.map(tour => {
          return (
            <Tour key={tour.id} {...tour} deleteHandler={deleteTourHandler} />
          );
        })}
      </div>
    );
  };

  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      {renderTours()}
    </section>
  );
};

export default Tours;
