import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
export default function App() {
  const students = [
    {
      id: 1,
      name: "Niharika Sharma",
      course: "Computer Science",
      marks: 88
    },
    {
      id: 2,
      name: "Neha gupta",
      course: "Information Technology",
      marks: 90
    },
    {
      id: 3,
      name: "Ankit chaubey",
      course: "Electronics",
      marks: 85
    }
  ];

  return (
    <div className="student-container">
      <h1 className="student-title">Student Information</h1>
      <div className="cards-wrapper">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h2 className="student-name">{student.name}</h2>
            <p className="student-course">Course: {student.course}</p>
            <p className="student-marks">Marks: {student.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}