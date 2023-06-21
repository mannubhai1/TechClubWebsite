import SigmaSquadLogo from '../../images/ss.png'

const SigmaSquadTitle = () => {
    return(
        <div className="title-area">
            <div className='gap'></div>
            <header className="title">
                SIGMA SQUAD
            </header>
            <p className="IITT">
                IIT TIRUPATI
            </p>
            <img src={SigmaSquadLogo} alt='Sigma Squad Logo' className='SSLogo'/>
        </div>
    )
}

export default SigmaSquadTitle