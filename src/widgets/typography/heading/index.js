import React from 'react';
import './title.css';

const Heading = (props) => {
  return <h5 className = "heading"> {props.children} </h5>
}

export default Heading;