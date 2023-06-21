import React from 'react'
import SigmaSquadAbout from './SigmaSquadComponents/SigmaSqaudAbout'
import './SigmaSquadComponents/SigmaSquad.css'
import SigmaSquadTeam from './SigmaSquadComponents/SigmaSquadTeam'
import SigmaSquadFooter from './SigmaSquadComponents/SigmaSquadFooter'
import SigmaSquadTitle from './SigmaSquadComponents/SigmaSquadTitle'
import SigmaSquadObj from './SigmaSquadComponents/SigmaSqaudObj'

const SigmaSquad = () => {
  return (
    <div className='SigmaSquad'>
      <SigmaSquadTitle />
      <SigmaSquadAbout />
      <SigmaSquadObj />
      <SigmaSquadTeam />
      <SigmaSquadFooter />
    </div>
  )
}

export default SigmaSquad