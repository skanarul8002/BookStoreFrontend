import React, { useState } from "react";
import "../CSS/AddStudent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const REACT_APP_BASE_URL = "https://bookstore-1ljq.onrender.com";
const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [generation, setGeneration] = useState("");
  const [yearOfPublished, setYearOfPublished] = useState("");

  const navigate = useNavigate("");
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${REACT_APP_BASE_URL}/book/add`, {
        name,
        author,
        imageUrl,
        generation,
        yearOfPublished,
      })
      .then((res) => {
        if (res.data.added) {
          navigate("/books");
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className="form-group">
          <label htmlFor="book">Book Name:</label>
          <input
            type="text"
            id="book"
            name="book"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="generation">Generation:</label>
          <input
            type="text"
            id="generation"
            name="generation"
            onChange={(e) => setGeneration(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="yearOfPublished">YearOfPublished:</label>
          <input
            type="number"
            id="yearOfPublished"
            name="yearOfPublished"
            onChange={(e) => setYearOfPublished(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-register">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;
