const Book = ({ author, title, img }) => {
  // attribute eventHandler
  // onClick, onMouseOver

  const clickEventHandler = () => {
    alert("hello world");
  };

  const titleClickHandler = (e) => {
    alert(e.target.innerText);
  };

  const complexHandler = (author) => {
    alert(author);
  };

  const mouseOverHandler = (title) => {
    console.log(title);
  };

  return (
    <article className="book" onMouseOver={() => mouseOverHandler(title)}>
      <img src={img} alt="a book" />
      <h1 onClick={titleClickHandler}>{title}</h1>
      <h4>{author}</h4>

      <button type="button" onClick={clickEventHandler}>
        reference example
      </button>
      <button onClick={() => complexHandler(author)}>complex example</button>
    </article>
  );
};

export default Book