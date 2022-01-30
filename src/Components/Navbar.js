import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-${props.mode} bg-${props.mode} justify-content-between`}>
            <a className="navbar-brand mx-3" href='#'>{props.title}</a>
            
            <div className={`form-check form-switch text-light mx-4`}>
            <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"  style={{color : props.mode === 'light' ? 'black' : 'white'}}>Enable darkmode</label>
            </div>

        </nav>
    </div>
  )
}
