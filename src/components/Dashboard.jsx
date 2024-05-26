import React, { useEffect, useState } from "react";
import "../CSS/Dashboard.css";
import axios from "axios";
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const Dashboard = () => {
  const [students, setStudents] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [books, setBooks] = useState(0);
  useEffect(() => {
    axios
      .get(`${REACT_APP_BASE_URL}/dashboard`)
      .then((res) => {
        if (res.data.ok) {
          setStudents(res.data.student);
          setAdmin(res.data.admin);
          setBooks(res.data.book);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Books</h2> <br />
        <h2>{books}</h2>
      </div>

      <div className="dashboard-box">
        <h2>Total Students</h2> <br />
        <h2>{students}</h2>
      </div>

      <div className="dashboard-box">
        <h2>Total Admins</h2> <br />
        <h2>{admin}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
