import TechSec from "./ContactComponents/TechSec"
import ContactDetails from "./ContactComponents/ContactDetails"
import './ContactComponents/Contact.css'

const Contact = () => {
    const details = [
        {
            clubName: "Techmaniacs",
            clubHead: "Chirag Kotian",
            clubMentor: "",
            phone: "8591757109",
            email: "techmaniacs@iittp.ac.in",
            discord: "https://discord.com/channels/786925920396247060/786925920396247063",
            linkedin: "https://www.linkedin.com/company/techmaniacs-iitt/",
            instagram: "https://www.instagram.com/techmaniacs_iitt/",
            color:"lightgreen"
        },
        {
            clubName: "Winged Voyage",
            clubHead: "Aman Kumar",
            clubMentor: "",
            phone: "9569664373",
            email: "automobileclub@iittp.ac.in",
            discord: "",
            linkedin: "https://www.linkedin.com/in/automobile-club-iitt-b2382827a/",
            instagram: "https://www.instagram.com/automobileclub.iitt/",
            color: "lightblue"
        },
        {
            clubName: "Digital Wizards",
            clubHead: "Arpit Gupta",
            clubMentor: "",
            phone: "8299480636",
            email: "codeclub@iittp.ac.in",
            discord: "https://discord.gg/PgxHkAny",
            linkedin: "https://www.linkedin.com/company/digitalwizards1/",
            instagram: "https://instagram.com/digitalwizardiittp?igshid=MzRlODBiNWFlZA==",
            color: "lightyellow"
        },
        {
            clubName: "Gagan Vedhi",
            clubHead: "Manas Poddar",
            clubMentor: "Pranav Sutar",
            phone: "9559530544",
            email: "astronomyclub@iittp.ac.in",
            discord: "",
            linkedin: "https://www.linkedin.com/in/gagan-vedhi-iitt-129314244/",
            instagram: "https://www.instagram.com/astroclubiitt/",
            color: "rgb(141, 184, 240)"
        },
        {
            clubName: "E-Cell",
            clubHead: "Vaibhav Mishra",
            clubMentor: "",
            phone: "7830190433",
            email: "ecell@iittp.ac.in",
            discord: "https://discord.com/channels/1119273291459346482/1119273291459346485",
            linkedin: "https://www.linkedin.com/in/e-cell-iit-tirupati-8689391b5/",
            instagram: "https://www.instagram.com/ecell_iitt/",
            color: "rgb(206, 163, 240)"
        },
        {
            clubName: "Sigma Squad",
            clubHead: "Ishaan Kulkarni and Deep Ganguly",
            clubMentor: "",
            phone: "xxxxxxxxxx",
            email: "sigmasquad@iittp.ac.in",
            discord: "https://discord.gg/hdpprcZJ",
            linkedin: "",
            instagram: "",
            color: "rgb(250, 162, 196)"
        }
    ]

    return(
        <>
            <TechSec />
            {details.map(club => (
                <ContactDetails 
                    clubName={club.clubName}
                    clubHead={club.clubHead}
                    clubMentor={club.clubMentor}
                    phone={club.phone}
                    email={club.email}
                    linkedin={club.linkedin}
                    instagram={club.instagram}
                    discord={club.discord}
                    color={club.color}
                />
            ))}
        </>
    )
}

export default Contact