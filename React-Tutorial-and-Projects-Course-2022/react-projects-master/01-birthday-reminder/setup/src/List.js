import React from "react";

const List = ({ people }) => {
  const renderBirthdayList = () => {
    return people.map((person) => {
      return (
        <li key={person.id} className='person'>
          <img src={person.image} alt='avatar' />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
        </li>
      );
    });
  };
  
  return <ul>{renderBirthdayList()}</ul>;
};

export default List;
