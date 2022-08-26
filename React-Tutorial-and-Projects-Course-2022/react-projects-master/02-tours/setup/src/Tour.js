import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, deleteHandler }) => {
  const [expanded, setExpanded] = useState(false);

  const deleteTourHandler = () => {
    deleteHandler(id);
  };
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{expanded ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
        </button>
        <button className='delete-btn' onClick={deleteTourHandler}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
