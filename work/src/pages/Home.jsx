import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import CategorySection from '../components/CategorySection'
import Animation from '../components/Animation'
const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <CategorySection/>
        <Animation/>
        <BestSellers/>
    </div>
  )
}

export default Home