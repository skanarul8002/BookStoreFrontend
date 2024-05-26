import React, { useEffect, useState } from "react";
import "../CSS/AddStudent.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const EditBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [generation, setGeneration] = useState("");
  const [yearOfPublished, setYearOfPublished] = useState("");

  const navigate = useNavigate("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}/book/book/${id}`)
      .then((res) => {
        setName(res.data.name);
        setAuthor(res.data.author);
        setImageUrl(res.data.imageUrl);
        setGeneration(res.data.generation);
        setYearOfPublished(res.data.yearOfPublished);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${REACT_APP_BASE_URL}/book/book/${id}`, {
        name,
        author,
        imageUrl,
        generation,
        yearOfPublished,
      })
      .then((res) => {
        if (res.data.updated) {
          navigate("/books");
          // console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
        <div className="form-group">
          <label htmlFor="book">Book Name:</label>
          <input
            type="text"
            id="book"
            name="book"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="generation">Generation:</label>
          <input
            type="text"
            id="generation"
            name="generation"
            value={generation}
            onChange={(e) => setGeneration(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="yearOfPublished">YearOfPublished:</label>
          <input
            type="number"
            id="yearOfPublished"
            name="yearOfPublished"
            value={yearOfPublished}
            onChange={(e) => setYearOfPublished(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-register">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBook;
