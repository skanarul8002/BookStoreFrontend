import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import "../CSS/Book.css";

const REACT_APP_BASE_URL = "https://bookstore-1ljq.onrender.com";

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}/book/books`)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} role={role}></BookCard>;
      })}
    </div>
  );
};

export default Books;
