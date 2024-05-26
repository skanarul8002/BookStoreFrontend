import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const REACT_APP_BASE_URL = "https://bookstore-1ljq.onrender.com";
const Logout = ({ setRole }) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}/auth/logout`)
      .then((res) => {
        if (res.data.logout) {
          setRole("");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, [setRole, navigate]);
  return null;
};

export default Logout;
