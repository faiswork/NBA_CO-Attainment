import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"

const DisplayMidTerm1Co = () => {

    const [list,setList]=useState([])


    const fetchAllmidterm1co=async()=>{
        var result = await getData("midterm1/displayallmidterm1_co")
        setList(result)
        alert(JSON.stringify(result))

        }
    
    useEffect(function(){
            fetchAllmidterm1co()
            alert(1)
    },[])



    const filltable =()=>{
        return list.map((item) => {
            return (
                <tr className='d-flex'>
                        <th scope="row" className='col-1'>{item.subcode}</th>
                        <td className='col-1'>{item.co_of_q1a}</td>
                        <td className='col-1'>{item.co_of_q1b}</td>
                        <td className='col-1'>{item.co_of_q1c}</td>
                        <td className='col-1'>{item.co_of_q1d}</td>
                        <td className='col-1'>{item.co_of_q1e}</td>
                        <td className='col-1'>{item.co_of_q2a}</td>
                        <td className='col-1'>{item.co_of_q2b}</td>
                        <td className='col-1'>{item.co_of_q2c}</td>
                        <td className='col-1'>{item.co_of_q3}</td>
                        <td className='col-1'>{item.co_of_q4}</td>
                        
                    </tr>
            )
        });
    }





    return( <div>
         <div className='container'>
            <h4>Mid Term 1 CO Scheme</h4>
            <table class="table table-hover table-dark">
                <thead>
                    <tr className='d-flex'>
                        <th scope="col" className='col-1'>Subject Code</th>
                        <th scope="col" className='col-1'>CO of Q1(A)</th>
                        <th scope="col" className='col-1'>CO of Q1(B)</th>
                        <th scope="col" className='col-1'>CO of Q1(C)</th>
                        <th scope="col" className='col-1'>CO of Q1(D)</th>
                        <th scope="col" className='col-1'>CO of Q1(E)</th>
                        <th scope="col" className='col-1'>CO of Q2(A)</th>
                        <th scope="col" className='col-1'>CO of Q2(B)</th>
                        <th scope="col" className='col-1'>CO of Q2(C)</th>
                        <th scope="col" className='col-1'>CO of Q3</th>
                        <th scope="col" className='col-1'>CO of Q4</th>
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

export default DisplayMidTerm1Co;
