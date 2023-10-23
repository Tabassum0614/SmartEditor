import React,{useState} from "react";
import PropTypes from 'prop-types';

export default function Textform(props) {
  const [textValue,setTextValue]=useState("")
  const handleONchange=(event)=>
  {
    setTextValue(event.target.value);
  }

  const handleUperCase=()=>
  {
    let newtext=textValue.toLocaleUpperCase();
    setTextValue(newtext);
    props.showAlert("Converted to uppercase","success")
  }

  const handlelowerCase=()=>
  {
    let VAL = document.getElementById("mytextarea").value.toLowerCase();
    setTextValue(VAL);
    props.showAlert("Converted to lowercase","success")
  }

  const handleClearText=()=>
  {
    setTextValue('');
    props.showAlert("Text cleared","success")
  }

  const handleExtraSpace=()=>
  {
    let newtext=textValue.replace(/\s+/g, ' ').trim()
    setTextValue(newtext);
    props.showAlert("Removed extra spaces","success")
  }

  const handleCopy=()=>
  {
    var copyText = document.getElementById("mytextarea");
   copyText.select();
   navigator.clipboard.writeText(copyText.value);
   props.showAlert("Copy to clipboard","success")
  }

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'#f8ffff':'#212529'}}> <h2 className="mb-3">{props.heading}</h2></div>
     
      <div className="container">
        <div className="mb-3">
          <textarea placeholder="Enter text here" style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'#f8ffff':'#212529'}}  value={textValue} onChange={handleONchange}
            className="form-control"
            id="mytextarea"
            rows="10"
          ></textarea>
          <button disabled={textValue.length===0} type="button" onClick={handleUperCase}  className="btn btn-primary my-3">Convert to Upercase</button>
          <button disabled={textValue.length===0} type="button" onClick={handlelowerCase}  className="btn btn-primary my-3 mx-2">Convert to LowerCase</button>
          <button disabled={textValue.length===0} type="button" onClick={handleExtraSpace}  className="btn btn-primary my-3 mx-2">Remove Extra Space</button>
          <button disabled={textValue.length===0} type="button" onClick={handleCopy}  className="btn btn-primary my-3 mx-2">copy</button>
          <button disabled={textValue.length===0} type="button" onClick={handleClearText}  className="btn btn-primary my-3 mx-2">Clear</button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'#f8ffff':'#212529'}}>
        <h2 className="mb3">Text Summary</h2>
        <p>{textValue.split(' ').filter((element)=>{return element.length!==0}).length} words and {textValue.length} characters</p>
        <p>{0.008*textValue.split(' ').filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2 className="mb3">Preview:</h2>
        <p>{textValue.length>0?textValue:"Enter something in above textbox to preview"}</p>
      </div>
    </>
  );
}
