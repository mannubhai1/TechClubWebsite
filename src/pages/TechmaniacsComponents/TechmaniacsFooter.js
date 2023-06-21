import { IoIosMail } from 'react-icons/io'
import { FiPhone } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const TechmaniacsFooter = () => {
    const email = "techmaniacs@iittp.ac.in"
    const discord = "https://discord.com/channels/786925920396247060/786925920396247063"
    const linkedin = "https://www.linkedin.com/company/techmaniacs-iitt/"
    const instagram = "https://www.instagram.com/techmaniacs_iitt/"

    return (
        <footer className="TechFooter">
            <div className='footer-container'>
                <div className="phone">
                    <FiPhone
                        aria-label='Contact Number'
                        size={30}
                        tabIndex="1"
                    />
                    <p style={{ fontSize: "medium", paddingTop: "2vh" }}>
                        +91 8591757109
                    </p>
                </div>
                <div className="email">
                    <Link to={`mailto:${email}`}
                    color='inherit'>
                        <IoIosMail
                            role='button'
                            aria-label='Email'
                            size={30}
                            tabIndex="0"
                            color='white'
                        />
                    </Link>
                    <p style={{ fontSize: "medium", paddingTop: "2vh" }}>
                        techmaniacs@iittp.ac.in
                    </p>
                </div>
                <div className="socialMedia">
                    <div className='accounts'>
                        <Link to={linkedin}>
                            <AiFillLinkedin
                                role='button'
                                aria-label='Linkedin'
                                size={30}
                                tabIndex="4"
                                color='white'
                            />
                        </Link>
                        <Link to={instagram}>
                            <FaInstagram
                                role='button'
                                aria-label='Instagram'
                                size={30}
                                tabIndex="3"
                                color='white'
                            />
                        </Link>
                        <Link to={discord}>
                            <BsDiscord
                                role='button'
                                aria-label='Discord'
                                size={30}
                                tabIndex="2"
                                color='white'
                            />
                        </Link>
                    </div>
                    <p style={{ fontSize: "medium", paddingTop: "2vh" }}>
                        Follow Us
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default TechmaniacsFooter