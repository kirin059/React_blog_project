import React from 'react';
import './Modals.css';


function Modals(props) {
    return (
        <div className="modals">
            <h2> {props.title[props.num]} </h2>
            <p> {props.date[props.num]} </p>
            <p> 상세 내용 </p>
        </div>
    )
};

export default Modals;