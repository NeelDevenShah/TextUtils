import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React,{useState} from 'react'

export default function About(props) {
  
    // const [myStyle, setMyStyle]=useState({
    //         color: "black",
    //         backgroundColor : "white"
    // });

    let myStyle={
      //This is css classes of the bootstrap
      color : props.mode ==="dark"?"white":"black",
      backgroundColor: props.mode==="dark"?"#f0b618":"white",
      borderColor: props.mode==="dark"?"white":"black"
    }

    return (
    <div className='container'>
        <h1>About Us</h1>
      <div className="accordion my-3" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      <strong>About Text-Utils.com</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
      <div className="accordion-body">
      We provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others. Check the current features below and feel free to recommend a new feature by contacting us.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      <strong>XML Formatter</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This tool can be used to quickly format your XML (eXtensible Markup Language) data into a more readable output.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Preserve spaces in HTML</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This tool can be used to transform whitespaces and line breaks into HTML entities in order to preserve them.  
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
