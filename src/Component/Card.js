import React from "react";
import "./Card.css";
const Card = ({ title, color}) => {
  return (
    <div className="card">
    
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {/* <p className="card-description">{description}</p> */}
        <div className="Progressbar">
        <span className="prog-name">0</span>
        <span className="pro-name1">0%</span>
        </div> 
      <hr style={{
        
        background: color
      }}></hr>
      
      </div>
    </div>
  );
};

export default Card;
