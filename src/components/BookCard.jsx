import React from "react";
import { Link } from "react-router-dom";
const BookCard = ({ book, role }) => {
  const { name, author, imageUrl,generation ,yearOfPublished} = book;
  console.log("-----------" + book);
  return (
    <div className="book-card">
      <img src={imageUrl} alt={name} className="book-image" />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
        <p>{generation}</p>
        <p>{yearOfPublished}</p>
      </div>
      {role === "admin" && (
        <div className="book-actions">
          <button>
            <Link to={`/book/${book._id}`} className="btn-link">
              Edit
            </Link>
          </button>

          <button>
            <Link to={`/delete/${book._id}`} className="btn-link">
              Delete
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
