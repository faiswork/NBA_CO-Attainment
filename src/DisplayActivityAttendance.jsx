import React, { useState, useEffect } from "react";
import { getData, postData } from "./FetchNodeServices";

const DisplayActivityAttendance = () => {
  const [list, setList] = useState([]);

  const fetchAllStudent = async () => {
    const result = await getData("extras/displayactivityattendance");
    setList(result);
  };

  useEffect(function () {
    fetchAllStudent();
  }, []);

  const filltable = () => {
    return list?.map((item) => {
      return (
        <tr className="d-flex">
          <th scope="row" className="col-1">
            {item.subcode}
          </th>
          <td className="col-1">{item.mark_of_activity1}</td>
          <td className="col-1">{item.mark_of_activity2}</td>
          <td className="col-1">{item.mark_of_activity3}</td>
          <td className="col-1">{item.mark_of_activity4}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <h4>Mid Term-1 Questions Attempted by students</h4>
        <table class="table table-hover table-dark">
          <thead>
            <tr className="d-flex">
              <th scope="col" className="col-1">
                Subject Code
              </th>
              <th scope="col" className="col-1">
                Activity 1
              </th>
              <th scope="col" className="col-1">
                Activity 2
              </th>
              <th scope="col" className="col-1">
                Activity 3
              </th>
              <th scope="col" className="col-1">
                Activity 4
              </th>
              
            </tr>
          </thead>
          <tbody>{filltable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayActivityAttendance;
