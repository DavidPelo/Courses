import React from "react";
import './GoalList.css'

const GoalList = ({ goals }) => {
  const renderGoals = () => {
    return goals.map(goal => <li key={goal.id}>{goal.text}</li>)
  }
  
  return (
    <ul className="goal-list">
      {renderGoals()}
    </ul>
  );
};

export default GoalList;
