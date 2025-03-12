import React from "react";
import "./Card.css";
const Card = ({ title, color,percent,count}) => {
  return (
    <div className="card">
    
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {/* <p className="card-description">{description}</p> */}
        <div className="Progressbar">
        <span className="prog-name">{count}</span>
        <span className="pro-name1">{percent}</span>
        </div> 
      <hr style={{
        
        background: color
      }}></hr>
      
      </div>
    </div>
  );
};

export default Card;