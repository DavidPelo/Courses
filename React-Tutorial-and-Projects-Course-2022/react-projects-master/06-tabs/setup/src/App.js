import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      const res = await fetch(url);
      const jobs = await res.json();

      setJobs(jobs);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <section>
        <h2 className='section loading'>Loading...</h2>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <header className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </header>
      <div className='jobs-center'>
        <aside className='btn-container'>
          {jobs.map((job, index) => (
            <button className={`job-btn ${index === value && 'active-btn'}`}onClick={() => setValue(index)}>
              {job.company}
            </button>
          ))}
        </aside>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4 className='job-icon'>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
        <button className='btn'>more info</button>
      </div>
    </section>
  );
}

export default App;
