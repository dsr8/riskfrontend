import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Slider from "./Component/Slider"; // Import the component
import Navbar from './Component/Navbar';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import RiskRegister from  './Component/RiskRegister';
// import Login from './Component/Login';  // Importing Login component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as  Switch, Redirect } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [probability,setProbability]=useState('');
  const [impact,setImpact]=useState('');
  const [mitigation,setMitigation]=useState('');
  const [location,setLocation]=useState('');
  const [responsible,setResponsible]=useState('');
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      title: title,
      description: description,
      details: details,
      type: type,
      category: category,
      probability:probability,
      impact:impact,
      mitigation:mitigation,
      location:location,
      responsible:responsible,
    };
    
  
    try {
      const response = await axios.post(
        'https://addminwebworld.com/laravel/risk/store1',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,  // Important for sending cookies (e.g., session cookies)
        }
      );
      alert(response.data.message); // Show success message
      setTitle('');
      setDescription('');
      setDetails('');
      setCategory('');
      setType('');
      setProbability('');
      setImpact('');
      setResponsible('');
      setMitigation('');
      setLocation('');
      setIsModalOpen(false); // Close modal after submit
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  };
  

  return (
    <>

      
      <Router>
      <div>
     <Routes>
       <Route path="/" element={<Login />}/>
    </Routes>
        <Routes>
          <Route path="/risk-register" element={<RiskRegister />} />
        </Routes>
        <Routes>
          <Route path="/risk-dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>



      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Risk</h2>
            <p>Fields marked with * are required</p>
            <button className="modal-close-btn" type="button" onClick={toggleModal}>
        &times;
      </button>
             
            <form onSubmit={handleSubmit}>
              <label>Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label>Summary</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief summary of the risk"
                rows={6}
                cols={50}
              />
               <label>Details</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Detailed description of the risk"
                rows={6}
                cols={50}
              />
               <label>Type *</label>
<select value={type} onChange={(e) => setType(e.target.value)} >
<option value="" disabled hidden></option>
<option value="norisk">No Risk</option>
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
  <option value="critical">Critical</option>
</select>

<label>Category *</label>
<select value={category} onChange={(e) => setCategory(e.target.value)} >
<option value="" disabled hidden></option>
<option value="norisk">No Risk</option>
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
  <option value="critical">Critical</option>
</select>

{/* <label>Inherent Risk Percentage:</label>
<div id="root"></div>      */}

<div className='riskname'>
      <label>Inherent Risk Percentage: {value}%</label>
      <Slider 
        min={0} 
        max={100} 
        defaultValue={value} 
        onValueChange={(val) => setValue(val)} 
      />
      {/* <p>Selected Value: {value}%</p> */}
    </div>

    <div className='riskname'>
      <label>Residual Risk Percentage (after mitigation): {value2}%</label>
      <Slider 
        min={0} 
        max={100} 
        defaultValue={value2} 
        onValueChange={(val) => setValue2(val)} 
      />
      {/* <p>Selected Value: {value}%</p> */}
    </div>





<label>Probability *</label>
<select value={probability} onChange={(e) => setProbability(e.target.value)} required>
<option value="" disabled hidden></option>
  <option value="vylk">Very likely</option>
  <option value="lk">Likely</option>
  <option value="pl">Possible</option>
  <option value="ul">Unlikely</option>
  <option value="vyul">Very unlikely</option>
</select>

<label>Impact *</label>
<select value={impact} onChange={(e) => setImpact(e.target.value)} required>
<option value="" disabled hidden></option>
  <option value="norisk">No Risk</option>
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
  <option value="critical">Critical</option>
</select>

<label>Mitigation Steps *</label>
              <textarea
                value={mitigation}
                onChange={(e) => setMitigation(e.target.value)}
                placeholder="Steps to mitigate the risk"
                rows={6}
                cols={50}
              />

<label>Location * (Azure, Intune, Local, Firewall, Policy,...)</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <label>Responsible *</label>
              <input
                type="text"
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
                required
              />
              <button type="submit" className='submit-btn'>Add Risk</button>
              {/* <button type="button" onClick={toggleModal}>Close</button> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;  // Ensure you're exporting App here
