import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Hero from '../Components/hero'
import DashboardSection from '../Components/dashsection'


export default function Dashboard() {
  return (
    <div>
        <Header />
        <Hero />
        <DashboardSection />
        <Footer />
    </div>
  )
}
