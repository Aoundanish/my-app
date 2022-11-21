import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClClick = ()=>{
        let newText = '';
        setText(newText)
    }
  const [text, setText] = useState("");
  return (
    <>
    <div className='container'style={{color: props.mode=== 'light'?'black':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  { <textarea className="form-control" id="form1" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode=== 'light'?'white':'grey', color: props.mode=== 'light'?'black':'white'}} rows="8"></textarea>}
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to 
Upercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to 
Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClClick}> 
Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'light'?'black':'white'}} >
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter the text in box above to preview here.'}</p>

    </div>
    </>
  )
}
