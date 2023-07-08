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
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '70%',
            paddingTop: '1.5vh',
            paddingBottom: '1.5vh'
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