// import React from 'react'
// import Card from "./Card";

import { useEffect, useState } from "react";
// import { Router, Switch, Route, Link } from 'react-router-dom';
import Moredetails from './Moredetails';

const Contact = ({setApi,apiData}) => {

    
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [show,setShow] = useState(true);
    
   

    const showDetails = (id) => {
        setSelectedUserId(id);
        setShow(false);
    }
    
    function deleteItem(apiData, id) {
        return apiData.filter((obj) => obj.id !== id);
    }

  if(apiData.length !=0 && show){  
  return (
    
    <>
       <div className='col-sm-6'>
          <h1>Contact List </h1>
        </div>
    
        <div className="row">
        {apiData.map((ele,index)=>{
            
            return(
                
            <div key={index} className="card col-sm-6">
                  {/* <div className="card"> */}
                    <div className="card-body ">
                        <div className="left-box">
                            <h5 className="card-title">Name:{ele.name} </h5>
                        </div>
                        <div className="right-box">
                            <h5>UserName : {ele.username}</h5>
                            <h5>Phone: {ele.phone}</h5>
                            <h5>Website: {ele.website}</h5>

                        </div>
                        <div className="details">
                            <a href="#" className="btn btn-primary" onClick={() => showDetails(ele.id)}>More Details</a>
                            <a href="#" className="btn btn-primary" onClick={() => setApi(deleteItem(apiData,ele.id))}>delete</a>
                        </div>
                    </div>
                </div>
             

            // </div>
            
            )
        })
        }
       
    </div>

    </>
    
  )
  }
  else{

    return (
        <>
        <div className="container">
            <div style={{display:"flex"}}>
                <button onClick={()=>setShow(!show)}>Home</button>
            </div>
            {apiData.map((ele,index)=>{
                if(ele.id === selectedUserId){
                return(
                    <Moredetails 
                        name = {ele.name}
                        username = {ele.username}
                        phone = {ele.phone}
                        website = {ele.website}
                        id = {ele.id}
                        index = {index}
                    />
                )}
            })
            }
           
        </div>
    
        </>
        
      )
  }
}

export default Contact