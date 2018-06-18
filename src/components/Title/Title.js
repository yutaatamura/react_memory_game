import React from 'react';
import "./Title.css";

const Title = (props) => (
<div className="container">
    <h1 className="title">{props.children}</h1>
    <p>You can only save each person once. If you click on the same person twice, use the time machine to go back and try again!</p>
</div>
);

export default Title;