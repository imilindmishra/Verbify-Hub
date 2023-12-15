import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
      console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
    };

    const clearAll =() => {
      console.log("Clear all was clicked");
      let newText= "";
      setText(newText);
    };

    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter the text here");
    // text = "new text" Wrong way to change the text
    // setText("new text") Correct way to set the text
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary ms-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary ms-2" onClick={clearAll}>
          Clear All
        </button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
