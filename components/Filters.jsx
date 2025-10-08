import React from 'react'

export default function Filters(){
  return (
    <>
      <div className="subheader">
        <h1 className="h1">Web Designer</h1>
        <div className="tabs">
          <button className="tab primary">Your matches</button>
          <button className="tab">Replies</button>
        </div>
      </div>

      <div className="filters">
        <select className="select"><option>All ratings</option></select>
        <select className="select"><option>All locations</option></select>
        <select className="select"><option>All response times</option></select>
        <div className="countPill">5 matches</div>
        <select className="select sort"><option>Sort by: best match</option></select>
        <div className="banner" style={{gridColumn:'1 / -1'}}>
          <div className="text"><span className="label">Recommended:</span> Request replies from your <span className="em">top 5 matches</span> to hear back faster</div>
          <button className="cta dark">Request your best matches here</button>
        </div>
      </div>

      <div className="requestTop">
        <button className="btn">Request your best matches here</button>
      </div>
    </>
  )
}
