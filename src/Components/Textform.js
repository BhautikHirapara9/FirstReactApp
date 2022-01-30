import React, { useState } from 'react'

export default function Textform() {
    const [text, setText] = useState('');
    const upClick = () => {
        setText(text.toUpperCase())
    }
    const loClick = () =>{
        setText(text.toLowerCase())
    }
    const change = (event) => {
        setText(event.target.value)
    }
  return (
    <>
        <div className="container mt-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"> <strong> <h1>Example textarea </h1> </strong> </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={change} placeholder='Enter Text here' style={{border : '2px solid black'}} rows="8"></textarea>
        </div>
        <div className="container">
            <button className='btn btn-primary m-2' onClick={upClick}>Convert to Uppercase</button>
            <button className='btn btn-primary m-2' onClick={loClick}>Convert to Lowercase</button>
            {/* <button className='btn btn-primary m-2'>Convert to Uppercase</button>
            <button className='btn btn-primary m-2'>Convert to Uppercase</button>
            <button className='btn btn-primary m-2'>Convert to Uppercase</button>
            <button className='btn btn-primary m-2'>Convert to Uppercase</button> */}
        </div>
    </>
  )
}
