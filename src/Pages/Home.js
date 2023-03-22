import React from 'react'
import Header from '../Components/header'
import Hero from '../Components/hero';
import Section1 from '../Components/section1';
import Section2 from '../Components/section2';
import Footer from '../Components/footer';

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Section1 />
        <Section2 />
        <Footer />
    </div>
  )
}
