import React, { Component } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import Midterm1Co from './Midterm1Co';
import Midterm1Marks from './Midterm1Marks';
import Midterm2Co from './Midterm2Co';
import Midterm2Marks from './Midterm2Marks';
import Students from './Students';
import ActivityCo from './ActivityCo';
import ActivityMarks from './ActivityMarks';
import DisplayStudent from './DisplayStudent';
import DisplayMidTerm1Co from './DisplayMidTerm1Co';
import DisplayMidTerm2Marks from './DisplayMidTerm2Marks';
import DisplayMidTerm2Co from './DisplayMidTerm2Co';
import DisplayMidTerm1Marks from './DisplayMidTerm1Marks';
import Quiz_co from './Quiz_co';
import Quiz_Marks from './Quiz_Marks';
import DisplayActivityCo from './DisplayActivityCo';
import DisplayActivityMarks from './DisplayActivityMarks';
import DisplayQuizCo from './DisplayQuizCo';
import DisplayQuizMarks from './DisplayQuizMarks';
import DisplayMidterm1Attendance from './DisplayMidterm1Attendance';
import DisplayMidterm2Attendance from './DisplayMidterm2Attendance';
import DisplayMidterm1AttendanceDetail from './DisplayMidterm1AttendanceDetail';
import DisplayMidterm1AttendanceDetail60 from './DisplayMidterm1AttendanceDetail60';
import DisplayActivityAttendance from './DisplayActivityAttendance';





export default function SideBar(props) {


  const handleClick = (v) => {
    props.setComponent(v);
    var header = document.getElementById("sidebarMenu");
    var btns = header.getElementsByClassName("nav-link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  };




  return (
    <div className="container-fluid ">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar "
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#" onClick={() => handleClick(<Students />)}>
                  Add Student
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => handleClick(<Midterm1Co />)}>
                  Add Mid Term 1 COS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<Midterm1Marks />)}>
                  Add Mid Term 1 Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<Midterm2Co />)}>
                  Add Mid Term 2 COS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<Midterm2Marks />)}>
                  Add Mid Term 2 Marks
                </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleClick(<ActivityCo />)}>
                    Add Activity CO's
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleClick(<ActivityMarks />)}>
                    Add Activity Marks
                  </a>
                </li>


                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleClick(<Quiz_co />)}>
                   Add Quiz Co
                  </a>
                </li>
             <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => handleClick(<Quiz_Marks />)}>
                   Add Quiz Marks
                  </a>
                </li>

                

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayStudent />)}>
                  Display All Students
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm1Marks />)}>
                  Display Mid Term 1 Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm2Marks />)}>
                  Display Mid Term 2 Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm1Co />)}>
                  Display Mid Term 1 Co
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidTerm2Co />)}>
                  Display Mid Term 2 Co
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayActivityCo />)}>
                  Display Activity Co
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayActivityMarks />)}>
                  Display Activity Marks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayQuizCo />)}>
                  Display Quiz Co
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayQuizMarks />)}>
                  Display Quiz Marks
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidterm1Attendance />)}>
                  Display Midterm1 Attendance
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidterm2Attendance />)}>
                  Display Midterm2 Attendance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidterm1AttendanceDetail />)}>
                  Display Midterm1 Attendance Detail
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayMidterm1AttendanceDetail60 />)}>
                  Display Midterm1 Attendance Detail 60%
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleClick(<DisplayActivityAttendance />)}>
                  Display Activity Attendance 
                </a>
              </li>
              
             

            </ul>
          </div>
        </nav>
      </div>
    </div>
  )


}

