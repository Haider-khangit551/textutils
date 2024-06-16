import React, { useState } from 'react'
// import Alerts from './Alerts';


export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Your Text Has Been Converted Into Uppercase.", "success")
  }
  const handleLoclick = () => {
    const newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Your Text Has Been Converted Into Lowercase.", "success")
  }
  const handleClear = () => {
    const newText = '';
    setText(newText);
    props.showAlert("Text Is Cleared.", "success")
  }
  const handleExtraSpace = () => {
    const newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Remove", "success");
  }
  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const [Text, setText] = useState('');
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={Text} onChange={handleOnChange} style={{ background: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert To Lowercase</button>
        <button className="btn btn-primary" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>YOUR TEXT CONSISTS OF:-</h1>
        <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes Read</p>
        <h2>PREVIEW YOUR TEXT:-</h2>
        <p>{Text.length>0?Text:"Enter Somrthing In The Text box To Preview It Here."}</p>
      </div>

    </>
  )
}
