import React from 'react'
import Banner from './Banner'
import Category from './Category/Category'
import PopularMenu from './PopularMenu/PopularMenu'
import Featured from './Featured/Featured'
import Testimonials from './Testimonials/Testimonials'

function Home() {
  return (
    <>
     <Banner/>
     <Category/>
     <PopularMenu/>
     <Featured/>
     <br />
     <br />
     <Testimonials/>
    </>
  )
}

export default Home
