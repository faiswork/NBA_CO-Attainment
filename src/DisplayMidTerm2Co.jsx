import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const DisplayMidTerm2Co = () => {
    const [list,setList]=useState([])


    const fetchAllStudent=async()=>{
        var result = await getData("midterm2/displayallmidterm2_co")
        setList(result)
        alert(JSON.stringify(result))

        }
    
    useEffect(function(){
            fetchAllStudent()
            alert(1)
    },[])
    const filltable =()=>{
        return list.map((item) => {
            return (
                <tr className='d-flex'>
                            <th scope="row" className='col-2'>{item.subcode}</th>
                            <td className='col-2'>{item.co_a}</td>
                            <td className='col-2'>{item.co_b}</td>
                            <td className='col-2'>{item.co_c}</td>
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
                            <th scope="col" className='col-2'>CO A</th>
                            <th scope="col" className='col-2'>CO B</th>
                            <th scope="col" className='col-2'>CO C</th>
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

export default DisplayMidTerm2Co;
