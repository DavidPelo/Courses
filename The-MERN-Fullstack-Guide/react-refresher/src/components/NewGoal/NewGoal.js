import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [goalInput, setGoalInput] = useState("");

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    setGoalInput(inputValue);
  };

  const addGoalHandler = (e) => {
    e.preventDefault();

    if(goalInput.trim() === '') return;

    const newGoal = {
      id: Math.random().toString(),
      text: goalInput,
    };

    props.onAddGoal(newGoal);
    setGoalInput("");
  };
  
  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input onChange={inputChangeHandler} value={goalInput} type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
