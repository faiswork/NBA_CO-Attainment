import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const DisplayActivityMark = () => {
    const [list,setList]=useState([])


    const fetchAllActivity=async()=>{
        var result = await getData("activity/displayallactivity_marks")
        setList(result)
        alert(JSON.stringify(result))

        }
    
    useEffect(function(){
            fetchAllActivity()
            alert(1)
    },[])
    const filltable =()=>{
        return list.map((item) => {
            return (
                <tr className='d-flex'>
                            <th scope="row" className='col-2'>{item.subcode}</th>
                            <td className='col-2'>{item.rollno}</td>
                            <td className='col-2'>{item.mark_of_activity1}</td>
                            <td className='col-2'>{item.mark_of_activity2}</td>
                            <td className='col-2'>{item.mark_of_activity3}</td>
                            <td className='col-2'>{item.mark_of_activity4}</td>
                            
                        </tr>
            )
        });
    }
    return( <div>
                   <div className='container'>
                <h4>Marks of Activity</h4>
                <table class="table table-hover table-dark">
                    <thead>
                        <tr className='d-flex'>
                            <th scope="col" className='col-2'>Subject Code</th>
                            <th scope="col" className='col-2'>Roll No.</th>
                            <th scope="col" className='col-2'>Mark Of Activity 1</th>
                            <th scope="col" className='col-2'>Mark Of Activity 2</th>
                            <th scope="col" className='col-2'>Mark Of Activity 3</th>
                            <th scope="col" className='col-2'>Mark Of Activity 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filltable()}
                    </tbody>
                </table>
            </div>
    </div>
    )
}

export default DisplayActivityMark;
