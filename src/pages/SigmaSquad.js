import React from 'react'
import SigmaSquadAbout from './SigmaSquadComponents/SigmaSqaudAbout'
import './SigmaSquadComponents/SigmaSquad.css'
import FutureEvents from './SigmaSquadComponents/FutureEvents'
import SigmaSquadTeam from './SigmaSquadComponents/SigmaSquadTeam'
import SigmaSquadFooter from './SigmaSquadComponents/SigmaSquadFooter'
import SigmaSquadTitle from './SigmaSquadComponents/SigmaSquadTitle'
import SigmaSquadObj from './SigmaSquadComponents/SigmaSqaudObj'
import sspic from './SigmaSquadComponents/Digital_Wizards_workshop_on_REACT_1.jpg'

const SigmaSquad = () => {
  return (
    <div className='SigmaSquad'>
      <SigmaSquadTitle />
      <SigmaSquadAbout />
      <img 
        src={sspic}
        alt='Workshop Pic'
        style={{
          display:'block',
          marginLeft:'auto',
          marginRight: 'auto',
          width:'70%',
          paddingTop:'1.5vh',
          paddingBottom: '1.5vh'
        }}
      />
      <FutureEvents />
      <SigmaSquadObj />
      <SigmaSquadTeam />
      <SigmaSquadFooter />
    </div>
  )
}

export default SigmaSquad