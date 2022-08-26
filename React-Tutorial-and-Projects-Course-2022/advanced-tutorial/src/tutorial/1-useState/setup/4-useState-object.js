import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerosn] = useState({
    name: "david",
    age: 29,
    message: "random message",
  });

  const [name, setName] = useState("david");
  const [age, setAge] = useState(29);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // const newPerson = { ...person, message: "hello world" };
    // setPerosn(newPerson);

    setMessage('hello world');
  };

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
