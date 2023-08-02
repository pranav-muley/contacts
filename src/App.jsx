import { useEffect, useState } from 'react'
import './App.css'
// import Contact from './components/Contact';

function App() {
  const [apiData, setApi] = useState(null);

  const fetchData = async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await data.json();
    // console.log(json['0'].name);
    setApi(json);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  console.log(apiData['0'].name,"apiData");
  return (
    <>
      
    </>
  )
}

export default App
