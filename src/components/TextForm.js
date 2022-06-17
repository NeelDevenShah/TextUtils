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
    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#6c69b5":"white", color: props.mode==="dark"?"white":"black"}}></textarea>
    <button disabled={text.length===0} className="btn btn-light my-4" onClick={handleUpClick1}>Convert to upper case</button>
    <button disabled={text.length===0} className="btn btn-light my-4 mx-4" onClick={clearText}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-light my-4 mx-4" onClick={handleUpClick2}>Convert to lower case</button>
    </div>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
      <h2>Your Summary</h2>
      //Here instead of the " " we have split form the /\s+/ which will split it from the word or next line
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length-(text.split(" ").length)+1} characters and extimated time to read text is {0.004 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
      <h2>Text Preview</h2>
      <p className='container'>{text.length>0?text : "Please enter some text to priview"}</p>
    </div>
    </>
  )
}
