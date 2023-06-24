import React from 'react'
import Banner from './Banner/Banner'
import Slider from './Slider/Slider'
import Programs from './Programs/Programs'
import ClubHead from './ClubHead/ClubHead'
import Footer from './Footer/Footer'
import Achievements from './Achievements/Achievements'

const Ecell = () => {
  return (
    <div className="Ecell" style={{
      backgroundColor: "white"
    }}>
        <Banner />
        <Programs />
        <Slider />
        <Achievements />
        <ClubHead />
        <Footer />
    </div>
  )
}

export default Ecell