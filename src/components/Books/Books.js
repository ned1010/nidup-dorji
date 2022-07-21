import React from "react";
import "./Books.css";

import { TopFive } from "./TopFive";

const Books = () => {
  return (
    <div className="container" id="Reading List">
      <h1 className="title">Reading List</h1>
      <div className="books">
        <p>
          I have never been a reader, but that changed when I started college in
          2019. I started to pick up some books recommended by my friends and
          read for at least 30 minutes a day and after a couple of weeks, I
          developed the habit of reading every day. So in 2020, I set a
          resolution to read 50 books, which is at least one book a week, and
          that seemed merely impossible with college workloads at that time.
          However, with consistency and a never-give-up mindset, I completed 50
          books that year, and one thing I learned from it was
          <span> choosing the right books</span>. Recommendations were
          tremendously helpful in deciding which book to read. So these are some
          of the recommendations for you all.
        </p>
        <h3 className="books-topic">These are my top five books</h3>
        <div className="top-five">
          {TopFive.map((imageList, index) => {
            return (
              <div className="image-container">
                <img
                  src={require("./../../assets/images/top5/top" +
                    imageList.top +
                    ".jpg")}
                  alt={imageList.alt}
                />
                <div className="overlay">
                  <div className="book-info">
                    <p>{imageList.title}</p>
                    <p>By {imageList.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="button">
          <a
            rel="noopener noreferrer"
            href="https://acidic-cornucopia-c1a.notion.site/2020-Reading-760ae587a00e4293948714cd711cbcd4"
            target="_blank"
            className="recommendation-btn"
          >More Recommendations</a>
        </div>
      </div>
    </div>
  );
};

export default Books;
