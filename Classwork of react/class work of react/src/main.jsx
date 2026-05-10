// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
function studentlist(){
  const students = ["Neha", "Amit", "Neha"];
  return(
     <ul>
      {students.map((student) => (
        <li key={student}>{student}</li>
      ))}
    </ul>
  )
}