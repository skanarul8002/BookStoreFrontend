import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const REACT_APP_BASE_URL = "https://bookstore-1ljq.onrender.com";
const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .delete(`${REACT_APP_BASE_URL}/book/book/${id}`)
      .then((res) => {
        if (res.data.deleted) {
          navigate("/books");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default DeleteBook;
