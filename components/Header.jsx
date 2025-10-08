import React from 'react'

export default function Header(){
  return (
    <header className="header">
      <div className="container topbar">
        <div>
          <div className="logo">
            <span className="pin"/>
            <span>Localists</span>
          </div>
          <div className="tagline">Find Local Professionals - Fast</div>
        </div>
        <nav className="nav">
          <a href="#">My requests</a>
          <div className="avatar" title="Chander">C</div>
        </nav>
      </div>
    </header>
  )
}
