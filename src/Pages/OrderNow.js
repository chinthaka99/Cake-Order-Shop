import React from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import Hero from '../Components/hero'
import Orderform from '../Components/orderform'
import Ordernow from '../Components/ordernowsection'
export default function OrderNow() {
  return (
    <div>
        <Header />
        <Hero />
        <Ordernow />
        <Orderform />
        <Footer />
    </div>
  )
}
