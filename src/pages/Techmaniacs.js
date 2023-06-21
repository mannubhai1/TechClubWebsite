import React from 'react'
import TechmaniacsAbout from './TechmaniacsComponents/TechmaniacsAbout'
import './TechmaniacsComponents/Techmaniacs.css'
import TechmaniacsTeam from './TechmaniacsComponents/TechmaniacsTeam'
import TechmaniacsFooter from './TechmaniacsComponents/TechmaniacsFooter'
import TechmaniacsTitle from './TechmaniacsComponents/TechmaniacsTitle'
import TechmaniacsIG from './TechmaniacsComponents/TechmaniacsInterestGroups'
import techmeetPic from './TechmaniacsComponents/TechMeet_11_Chirag_Team.jpg'

const Techmaniacs = () => {
  return (
    <div className='Techmaniacs'>
      <TechmaniacsTitle />
      <TechmaniacsAbout />
      <img src={techmeetPic}
          style={{
            paddingTop:"3vh",
            paddingBottom:"2.5vh",
            height:"100vh",
            width:"98.8vw"
          }}
          alt='Tech Meet 11.0'
      />
      <TechmaniacsIG />
      <TechmaniacsTeam />
      <TechmaniacsFooter />
    </div>
  )
}

export default Techmaniacs