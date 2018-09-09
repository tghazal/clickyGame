import React from "react";
import "./ImageCard.css";

const ImageCard= (props) => (
  <div className="card">
    <div className="img-container">
   <label>{props.name}</label>
      <img alt={props.name} src={props.image}   onClick={() => props.onClick(props.id)} className={props.class} />
    
      {/* <img alt={props.name} src={props.image} onClick={props.changeImages(props.id)}/> */}
    </div>
   
  </div>
);

export default ImageCard;