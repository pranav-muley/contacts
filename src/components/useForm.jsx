
import { useEffect, useState } from "react"

export const useForm = ()=>{
    const [inputValues,setInputValues] = useState({
        
        name:"",
        UserName:"",
        email:"",
        website:"",
        phone:"",
        address:{
            street:"",
            city:"",
            zipcode:""
        },
        company:{
            name:"",
            bs:""
        }
    });
    const onHandleInputChangeupdate = (e)=>{
        
        setInputValues({...inputValues,[e.target.name]:e.target.value})
        console.log("custom Hooks input value ",e);
    }
    const onHandleInputChangeaddress = (e) =>{
        setInputValues({
            ...inputValues,
            address: {
              ...inputValues.address,
              [e.target.name]: e.target.value,
            }
          });
    }
    const onHandleInputChangeCompany = (e) =>{
        setInputValues({
            ...inputValues,
            company:{
                ...inputValues.company,
                [e.target.name]: e.target.value,
            }
          });
    }
    return {inputValues,onHandleInputChangeupdate,onHandleInputChangeaddress,onHandleInputChangeCompany};
};
``
