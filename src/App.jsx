import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Contact from './components/Contact';

function App() {
  const [apiData, setApiData] = useState([]);
  const [add, setAdd] = useState(true);
  const [formData, setFormData] = useState({});

  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await data.json();
    setApiData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitted = () => {
    setAdd(!add);
    alert('Successfully Added...');
  };

  const updateFormData = (newData) => {
    setApiData([...apiData,newData]);
    // addNewContact();

    // console.log("newData ",newData);
  };


  console.log(apiData);

  if (apiData.length !== 0) {
    return (
      <div className="container">
        {add ? (
          <div className="add-btn" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <button className="btn btn-primary" onClick={() => setAdd(!add)}>
              Add Contact
            </button>
            <Contact apiData={apiData}
         setApi={setApiData} />
          </div>
        ) : (
          <Card updateFormData={updateFormData} />
        )}

        
      </div>
    );
  }
}

export default App;
