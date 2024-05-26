import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setRole }) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.APP_BASE_URL}/auth/logout`)
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
