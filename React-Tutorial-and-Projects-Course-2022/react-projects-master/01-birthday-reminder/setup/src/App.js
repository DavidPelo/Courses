import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const birthdaysToday = people.length;

  const clearListHandler = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        {people.length === 0 ? (
          <h3>There are no birthdays :(</h3>
        ) : (
          <h3>{birthdaysToday} birthdays today</h3>
        )}

        <List people={people} />
        <button onClick={clearListHandler}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
