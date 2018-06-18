import React from 'react';
import "./Jumbotron.css";

const Jumbotron = (props) => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            {props.children}
          </div>
        </div>
    </div>
);

export default Jumbotron;