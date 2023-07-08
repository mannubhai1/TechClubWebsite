import { Link } from "react-router-dom"
import { IoIosMail } from "react-icons/io"
import { FiPhone } from "react-icons/fi"

const TechSec = () => {
    const email = "technical_sec@iittp.ac.in"
    const screenWidth = window.outerWidth
    const iconSize = screenWidth > 450 ? 30 : screenWidth < 420 ? 17 : 20

    return(
        <div className="tech-sec-container">
            <div className="tech-aff-details">
                <h3>Technical Affairs Council</h3>
                <p>Technical Affairs Secretary: Sumukh Porwal</p>
                <div className="tech-sec-contacts">
                    <div className="phone-contact">
                        <FiPhone
                            aria-label='Contact Number'
                            size={iconSize}
                            // tabIndex="1"
                            color="white"
                        />
                        <p style={{ paddingTop: "2vh" }}>
                            +91 7974466309
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
                            technical_sec@iittp.ac.in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechSec