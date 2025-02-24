import React from "react";
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faCog, faTachometerAlt, faExclamationTriangle,faClipboardCheck, faChartBar, faFileExport  } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
const clearSessionData = () => {
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('user');
};
const logout = async () => {
  try {
    const response = await axios.get(
      'http://127.0.0.1:8000/user/logout',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: false, 
      }
    );

    if (response.status === 200 && response.data.status === 'success') {
    
      clearSessionData();
      window.location.href = '/';
    } else {
      alert(response.data.message || 'Something went wrong!');
    }
  } catch (error) {
    console.error('Logout failed:', error);
    alert('Logout failed. Please try again!');
  }
};
const Navbar = ({

  
  
  }) => {
    const handleLogout = () => {
      logout();
    };
    return (
        <>
        <nav className="navbar">
        <div className="container">
        <img src="/risk-reduction-strategies.png" alt="Logo" width="50" />
          <ul className="nav-links">
          <li> <Link to="/risk-dashboard">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Dashboard
          </Link></li>
            <li>  <Link to="/risk-register">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Risk Register
          </Link></li>
            <li><a href="#"><FontAwesomeIcon icon={faClipboardCheck} />Response Plan</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faUsers} />Users</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faChartBar} />Reporting</a></li>
            <li><a href="#"> <FontAwesomeIcon icon={faCog} /> Settings</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faFileExport}  />Export</a></li>
            <li><button onClick={handleLogout} className="logout-button">logout</button></li>
          </ul>
        </div>
      </nav>
      </>

    );
  };
  
  export default Navbar;