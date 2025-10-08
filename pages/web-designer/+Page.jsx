import React from 'react'
import Header from '../../components/Header'
import Filters from '../../components/Filters'
import ListingCard from '../../components/ListingCard'
import Footer from '../../components/Footer'

export default function Page({ listings=[] }){
  return (
    <>
      <Header/>
      <main className="container">
        <Filters/>
        <div className="listingWrap">
          <section className="list">
            {listings.map((item, i)=> (
              <React.Fragment key={item.id}>
                <ListingCard item={item}/>
                {i < listings.length-1 && <div className="divider"/>}
              </React.Fragment>
            ))}
            <div className="more"><button className="btn">See More Professionals</button></div>
          </section>
          <aside>
            {/* Right column left intentionally empty to match light panel in design */}
          </aside>
        </div>
      </main>
      <Footer/>
    </>
  )
}
