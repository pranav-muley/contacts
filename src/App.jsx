import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Contact from './components/Contact';

function App() {
  const [apiData, setApiData] = useState([]);
  const [add, setAdd] = useState(true);
  const [showForm,setShowForm] = useState(true);
  

  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await data.json();
    setApiData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateFormData = (newData) => {
    alert('Successfully Added...');
    var max = 0;
    for (var j = 0; j < apiData.length; j++){
      console.log("indedx ",apiData[j].id);
        if(apiData[j].id > max){
          max = apiData[j].id;
        }
      }

      const updatedData = {id:max+1,...newData};
    setApiData([...apiData,updatedData]);
    // setShowForm(!showForm);
    // addNewContact();

    // console.log("newData ",newData);
  };

  const handleOnClick = ()=>{
    setAdd(!add) ;
    setShowForm(!showForm);
  }


  console.log(apiData);

  if (apiData.length !== 0) {
    return (
      <div className="container">
        {add  ? (
          
          <div className="add-btn" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <button className="btn btn-primary" onClick={handleOnClick}>
              Add Contact
            </button>
          </div>
        ) : (
          <Card 
          updateFormData={updateFormData} 
          setShowForm ={setShowForm}
          showForm = {showForm}
          add ={add}
          setAdd = {setAdd}
          apiData={apiData}
          />
        )}

       {
        showForm?(
          <Contact 
          apiData={apiData}
          setApi={setApiData} 
          />
        ):""
       }
        
      </div>
    );
  }
}

export default App;
