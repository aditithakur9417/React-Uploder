import React from 'react'; 
import "./Box.css"

const Buttoni = (props) => { 
  
  return ( 
    
    <button type="button" id="add_more_img" className="btn btn-success" onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 

export {Buttoni};

const Buttonv = (props) => { 
  
  return ( 
    
    <button type="button" id="add_more_img" className="btn btn-success" onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 

export {Buttonv};