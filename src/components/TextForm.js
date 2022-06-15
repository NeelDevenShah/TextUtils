import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText]=useState("");
  
  const handleUpClick1 =()=>{
    console.log("Upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Upper case Successful","success");
  }

  const handleUpClick2 =()=>{
    console.log("Lower case was clicked");
    let newText=text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Convert to Lower Case Successful","success");
  }

  const clearText=()=>{
    console.log("Clearing the text");
    setText("");
    props.showAlert("Clear Text Successful","success");
  }

  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
    {/* (I.M.P. step)Here the first brace is for the js and the other is for the object */}
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"black"}}></textarea>
    <button className="btn btn-light my-4" onClick={handleUpClick1}>Convert to upper case</button>
    <button className="btn btn-light my-4 mx-4" onClick={clearText}>Clear Text</button>
    <button className="btn btn-light my-4 mx-4" onClick={handleUpClick2}>Convert to lower case</button>
    </div>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
      <h2>Your Summary</h2>
      <p>{(text.split(" ").length)-1} words and {text.length-((text.split(" ").length)-1)} characters and extimated time to read text is {0.004*((text.split(" ").length)-1)}</p>
      <h2>Text Preview</h2>
      <p className='container'>{text}</p>
    </div>
    </>
  )
}
