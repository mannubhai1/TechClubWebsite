import TechmaniacsLogo from '../../images/tm.jpeg'

const TechmaniacsTitle = () => {
    return(
        <div className="titleArea">
            <div className="gap"></div>
            <header className="title">
                TECHMANIACS
            </header>
            <p className="IITT">
                IIT TIRUPATI
            </p>
            <img src={TechmaniacsLogo} alt='Techmaniacs Logo' className='TechmaniacsLogo'/>
            <p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p>
            <p></p><p></p><p></p><p></p><p></p>
        </div>
    )
}

export default TechmaniacsTitle