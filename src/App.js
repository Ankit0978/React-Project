import React from "react"
import { apiURL, filterData} from './data';
import Navbar from "./Components/NavBar"
import Filter from "./Components/Filter"
import { toast } from 'react-toastify';
import { Spinner } from "./Components/Spinner";
import {useState, useEffect} from "react"
import Cards from "./Components/Cards"
// import "./Components/navBar.css";
// import "./spinner2.css"
// import "./Components/cards2.css"
import "./Components/maindiv.css"

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    // console.log("Data will print")
    try {
      let response = await fetch(apiURL);
      let output = await response.json();
      // console.log("data is not coming from api------",output.data)
      // Output
      setCourses(output.data);
      // console.log(output)
      // console.log("Is data coming")
    } catch (error) {
      toast.error("Network error");
    }
    
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar ></Navbar>
      </div>
      <div className="maindiv">
      <div className="filterdiv">
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner></Spinner> :<Cards courses = {courses}></Cards>}</div>
      </div>
      
    </div>
  );
};

export default App;
