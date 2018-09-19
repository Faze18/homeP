import React from "react";
import MainNote from "../mainNote";
import Col1 from "../../components/Col1";
const ColMd7 = (props) => (
    <div className="w3-col m6 ">
        <div className="w3-row-padding">
        <br></br>
            {props.childComponent1}
            {props.childComponent2}
            {props.childComponent3}
            {props.childComponent4}
            <Col1> </Col1>
            {props.childComponent5}
            <Col1> </Col1>
            
            {props.childComponent6}
            {props.childComponent7}
            <br></br>
            {props.childComponent8}
            {props.childComponent9}
            {props.childComponent10}

        </div>
    </div>
)
export default ColMd7;
