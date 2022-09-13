import React, { useState,useEffect } from "react"
import {getData,postData} from "./FetchNodeServices"




const DisplayMidterm1Attendance=()=>{
         const [list,setList]=useState([])
        


    const fetchAllMidterm1=async()=>{
        var result = await getData("extras/displaytotalmidterm1attendance")
        setList(result)
        alert(JSON.stringify(result))

        }

    
    
    useEffect(()=>{
            fetchAllMidterm1()
            alert(1)
    },[])


        const filltable =()=>{
        return list.map((item) => {
            return (
                <tr className='d-flex'>
                        <th scope="row" className='col-2'>{item.subcode}</th>
                        <td className='col-2'>{item.p}</td>
                        
                    </tr>
            )
        });
    }




    return(
        <div className='container'>
        <h4>Midterm 1 Attendance</h4>
               <table class="table table-hover table-dark">
                         <thead>
                            <tr className='d-flex'>
                                <th scope="col" className='col-2'>Subject Code</th>
                                <th scope="col" className='col-2'>Students Attended</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           
                           {filltable()}
                            
        
                            
                         </tbody>
                     </table>

                     
             </div>
    )
}

export default DisplayMidterm1Attendance;
