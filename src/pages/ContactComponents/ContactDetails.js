import { FiPhone } from "react-icons/fi"
import { IoIosMail } from "react-icons/io"
import { AiFillLinkedin } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import { Link } from "react-router-dom"

const ContactDetails = ({clubName, clubHead, clubMentor, phone, email, linkedin, instagram, discord, color}) => {

    const screenWidth = window.outerWidth
    const iconSize = screenWidth > 450 ? 30 : screenWidth < 420 ? 17 : 20

    return (
        <div className="contact-container">
            <div 
                className="club-details" 
                style={{ backgroundColor: color }}
            >
                <h3>{clubName}</h3>
                <p>Club Head(s): {clubHead}</p>
                <p>{clubMentor !== "" ? `Club Mentor: ${clubMentor}` : null}</p>
                <div className="contact-details">
                    <div className="phone-contact">
                        <FiPhone
                            aria-label='Contact Number'
                            size={iconSize}
                            // tabIndex="1"
                            color="white"
                        />
                        <p style={{ paddingTop: "2vh" }}>
                            +91 {phone}
                        </p>
                    </div>
                    <div className="email-contact">
                        <Link to={`mailto:${email}`}
                            color='inherit'>
                            <IoIosMail
                                role='button'
                                aria-label='Email'
                                size={iconSize}
                                tabIndex="0"
                                color='white'
                            />
                        </Link>
                        <p style={{ paddingTop: "2vh" }}>
                            {email}
                        </p>
                    </div>
                    <div className="socialMedia-contact">
                        <div className='accounts-contact'>
                            {linkedin !== "" ? 
                                <Link to={linkedin}>
                                    <AiFillLinkedin
                                        role='button'
                                        aria-label='Linkedin'
                                        size={iconSize}
                                        tabIndex="4"
                                        color='white'
                                    />
                                </Link> :
                                null
                            }
                            {instagram !== "" ?
                                <Link to={instagram}>
                                    <FaInstagram
                                        role='button'
                                        aria-label='Instagram'
                                        size={iconSize}
                                        tabIndex="3"
                                        color='white'
                                    />
                                </Link> :
                                null
                            }
                            {discord !== "" ?
                                <Link to={discord}>
                                    <BsDiscord
                                        role='button'
                                        aria-label='Discord'
                                        size={iconSize}
                                        tabIndex="2"
                                        color='white'
                                    />
                                </Link> :
                                null
                            }
                        </div>
                        <p style={{ paddingTop: "2vh" }}>
                            Follow Us
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails