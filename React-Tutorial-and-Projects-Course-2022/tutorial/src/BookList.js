import React from "react";
import Book from "./Book";

const author = "Charles Bukowski";
const title = "Ham and Rye";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/91PY8Upu8oL._AC_UL254_SR254,254_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={"salinger"} title={title} img={img} />
    </section>
  );
}

export default BookList