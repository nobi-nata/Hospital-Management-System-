import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter the text..')

    const handleUpClick= ()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleOnChange= (event)=>{
        setText(event.target.value)
    }
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>

            </div>
            
        </div>
    );
}
