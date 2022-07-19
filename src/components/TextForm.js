import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState('');
  // setText('this keyword is used to update the text keyword, As India act cannot update it directly.');
  const handleUpClick = () => {
    console.log('converting to uppercase' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to upper case', 'success');
  }
  const handleLowClick = () => {
    console.log('converting to uppercase' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lower case', 'success');
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'black':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <label for="myBox" class="form-label">textarea</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" 
          // style={{ 
          //     backgroundColor: props.mode === 'dark' ? 'grey' : 'white', 
          //     color: props.mode === 'dark' ? 'white' : 'black' }}
          >
              </textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
      </div>
      <div className="container" 
      // style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
          <h1>your text summary : </h1>
          <p>
              {text.split(' ').length} words and {text.length} characters
              <br />
              {0.008 * text.split(' ').length} minutes read
          </p>
          <h3>preview</h3>
          <p>
              {text.length>0?text:'Enter something to preview'}
          </p>
      </div>
    </>
  )
}