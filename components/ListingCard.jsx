import React from 'react'

function Stars({ value=5 }){
  const full = '★★★★★'.slice(0, value)
  const empty = '☆☆☆☆☆'.slice(0, 5-value)
  return <span className="stars" aria-label={`${value} star rating`}>{full}{empty}</span>
}

export default function ListingCard({item}){
  return (
    <div className="card">
      <img className="thumb" src={item.image} alt={item.name} />
      <div className="body">
        <div className="nameRow">
          <h3 className="name">{item.name}</h3>
          <div className="rating">
            <Stars value={item.stars} />
            <span className="count">{item.reviews}</span>
          </div>
        </div>
        <div className="meta">
          <span>●</span>
          <span>{item.distance}</span>
          <span className="km">{item.location}</span>
        </div>
        <div className="badges">
          {item.tags.map(t=> <span key={t} className="badge">{t}</span>)}
        </div>
        <p className="desc">{item.description}</p>
        <a className="link" href="#">View Profile →</a>
        <div className="innerDivider"/>
      </div>
      <div className="side">
        <div className="tick">✓</div>
        <span className="pill">Quick to respond</span>
        <button className="cta">Request reply</button>
      </div>
    </div>
  )
}
