import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadTours() {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      setTours(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    loadTours();
  }, []);

  const deleteTourHandler = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={loadTours}>Fetch tours</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {isLoading && <Loading />}
      {!isLoading && <Tours tours={tours} deleteTour={deleteTourHandler} />}
    </main>
  );
}

export default App;
