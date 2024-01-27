import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Books.css";

function Books() {
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((response) => {
        const data = response.data.books;
        console.log(response);
        setApiData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="main">
      {ApiData.map((item) => (
        <div>
          <div className="container" key={item.id}>
            <div className="img-container">
              <h3>{item.title}</h3>
              <img src={item.imageLinks.smallThumbnail} alt={item.title} />
              <div className="author">{item.authors}</div>
            </div>

            <article>{item.description}</article>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Books;
