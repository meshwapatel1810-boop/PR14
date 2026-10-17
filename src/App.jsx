
import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSubmitted(false);
          }}
          required
        />

        <label>Select Course</label>
        <select
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
            setSubmitted(false);
          }}
          required
        >
          <option value="">-- Select Course --</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MCA">MCA</option>
        </select>

        <label>Gender</label>
        <div className="gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => {
                setGender(e.target.value);
                setSubmitted(false);
              }}
              required
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => {
                setGender(e.target.value);
                setSubmitted(false);
              }}
            />
            Female
          </label>
        </div>

        <button type="submit">Register</button>
      </form>

      {submitted && (
        <div className="result">
          <h2>Registration Successful!</h2>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Course:</b> {course}</p>
          <p><b>Gender:</b> {gender}</p>
        </div>
      )}
    </div>
  );
}

export default App;