
import { useEffect, useState } from "react"

export const useForm = ()=>{
    const [inputValues,setInputValues] = useState({
        id:"",
        name:"",
        UserName:"",
        email:"",
        website:"",
        phone:""
    });
    const onHandleInputChangeupdate = (e)=>{
        setInputValues({...inputValues,[e.target.name]:e.target.value})
        console.log("custom Hooks input value ",inputValues);
    }
    return {inputValues,onHandleInputChangeupdate};
};
``
