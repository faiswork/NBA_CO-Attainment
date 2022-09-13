import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const DisplayActivityCo = () => {
    const [list,setList]=useState([])


    const fetchAllActivity=async()=>{
        var result = await getData("activity/displayallactivity_co")
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
                            <td className='col-2'>{item.co_of_act1}</td>
                            <td className='col-2'>{item.co_of_act2}</td>
                            <td className='col-2'>{item.co_of_act3}</td>
                            <td className='col-2'>{item.co_of_act4}</td>
                            
                        </tr>
            )
        });
    }
    return( <div>
                   <div className='container'>
                <h4>Mid Term-2 Marks</h4>
                <table class="table table-hover table-dark">
                    <thead>
                        <tr className='d-flex'>
                            <th scope="col" className='col-2'>Subject Code</th>
                            <th scope="col" className='col-2'>CO Of Activity 1</th>
                            <th scope="col" className='col-2'>CO Of Activity 2</th>
                            <th scope="col" className='col-2'>CO Of Activity 3</th>
                            <th scope="col" className='col-2'>CO Of Activity 4</th>
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

export default DisplayActivityCo;
