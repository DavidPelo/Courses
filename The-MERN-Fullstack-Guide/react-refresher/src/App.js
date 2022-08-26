import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [goals, setGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);

  const addGoalHandler = (newGoal) => {
    setGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addGoalHandler}/>
      <GoalList goals={goals} />
    </div>
  );
};

export default App;
