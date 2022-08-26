import React, {useState} from 'react';
import data from './data';

function App () {
  const [count, setCount] = useState (0);
  const [text, setText] = useState ([]);

  function countHandler (e) {
    setCount (e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault ();

    let amount = parseInt(count);
    const loremIpsum = [];

    if(amount <= 0) amount = 1;
    if(amount >= data.length) amount = data.length;

    for (let i = 0; i < amount; i++) {
      const randomText = data[Math.floor(Math.random() * data.length)];
      loremIpsum.push(randomText);
    }

    setText(loremIpsum);
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="counter">Paragraphs</label>
        <input
          type="number"
          name="counter"
          id="counter"
          value={count}
          onChange={countHandler}
        />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="result">
        {text.map((para, index) => <p key={index}>{para}</p>)}
      </article>
    </section>
  );
}

export default App;
