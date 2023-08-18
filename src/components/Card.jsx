// import React from 'react';

import { useState,setState, useEffect } from "react";
import { useForm } from "./useForm";
const Card = ({updateFormData,setShowForm,showForm,add,setAdd,apiData}) => {
  // const { address  } = props;
  // console.log("card", props);
  // const [data,setdata] = useState({});
 
  // formData = inputValues;
  
  const {inputValues,onHandleInputChangeupdate,onHandleInputChangeaddress,onHandleInputChangeCompany}  = useForm();

  // console.log(inputValues);
  // const handleSubmit = () => {
  //   // updateFormData(inputValues)
  //   console.log("handle submit form data ",inputValues);
  // }

  const onSubmit = ()=>{
    setShowForm(!showForm);
    updateFormData(inputValues);
    setAdd(!add);
  }
  
  return (
    
    <div className="addcontact">
      <h3>New Contact </h3>
    <form noValidate="true">
      <div className="form-group">
        
      <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          value={inputValues.name}
          name="name"
          onChange={(e) => onHandleInputChangeupdate(e, "name")}
          required="required"
        />

        
        <label htmlFor="user">User Name</label>
        <input type="text" className="form-control" id="user" aria-describedby="emailHelp"
         placeholder="Enter User Name"
         value={inputValues.UserName}
         name='UserName'
         onChange={(e) =>onHandleInputChangeupdate(e,"UserName")}
         required="required"
         />

        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter email"
        value={inputValues.email}
        name='email'
        onChange={(e) =>onHandleInputChangeupdate(e,"email")}
        />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        <br/>
        <label htmlFor="website">Website</label>
        <input type="text" className="form-control" id="website" aria-describedby="websiteHelp"
         placeholder="Enter website"
         value={inputValues.website}
         name='website'
         onChange={(e) =>onHandleInputChangeupdate(e,"website")}
         required="required"
         />

      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="text" className="form-control" id="phone" maxLength="10" pattern="\d{10}"
         title="Please enter exactly 10 digits"  
         placeholder='99XXXXXXXX'
         value={inputValues.phone}
         name='phone'
         onChange={(e) =>onHandleInputChangeupdate(e,"phone")}
         required="required"
         />
        {/* <input type="number" className="form-control" id="phone" placeholder="99XXX"/> */}
      </div>
      <h4>Address</h4>
      <div className="form-group">
        
        <label htmlFor="street">Street</label>
        <input type="text" className="form-control" id="street"
         placeholder='Street'
         value={inputValues.street}
         name='street'
         onChange={(e) =>onHandleInputChangeaddress(e,"street")}
         required="required"
         />
         <label htmlFor="city">City</label>
        <input type="text" className="form-control" id="city"
         placeholder='City'
         value={inputValues.city}
         name='city'
         onChange={(e) =>onHandleInputChangeaddress(e,"city")}
         required="required"
         />
         <label htmlFor="zipcode">zipcode</label>
        <input type="text" className="form-control" id="zipcode"
         placeholder='zipcode'
         value={inputValues.zipcode}
         name='zipcode'
         onChange={(e) =>onHandleInputChangeaddress(e,"zipcode")}
         required="required"
         />
      </div>
    <h4> Company Details</h4>
    <div className="form-group">
      <label htmlFor="Name">Comapny Name</label>
        <input type="text" className="form-control" id="Name"
          placeholder='Enter Comapny Name'
          value={inputValues.company.name}
          name="name"
          onChange={(e) =>onHandleInputChangeCompany(e,"name")}
          required="required"
        />

      <label htmlFor="about">Comapny Name</label>
          <input type="text" className="form-control" id="about"
            placeholder='About Comapny'
            value={inputValues.company.bs}
            name="bs"
            onChange={(e) =>onHandleInputChangeCompany(e,"bs")}
            required="required"
          />
    </div>

      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">I understand that the information provided is correct.</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </form>
    
  </div>
  );
}

export default Card;
