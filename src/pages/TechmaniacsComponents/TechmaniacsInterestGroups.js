import electronicspic from './Hard hat helmet.jpg'
import arduinopic from './electricBike.jpg'
import dronespic from './Techmaniacs_club_project_Drone_Build_2.jpg'
import roboticspic from './race_car.jpg'
import DropdownText from './DropdownText'

const TechmaniacsIG = () => {
    const electronicsText = "Dive into the world of digital and analog electronics, explore sensor integration, or learn about emerging technologies like flexible electronics and wearables. In our interest group, we embrace the multidisciplinary nature of electronics, combining elements of physics, engineering, computer science, and creativity to push the boundaries of what's possible."

    const roboticsText = "We delve into various aspects such as autonomous navigation, artificial intelligence, and human - robot interaction.We focus on designing, developing, and programming autonomous machines that can interact with their environment and perform tasks with precision and intelligence. From building and programming your first robot to advanced robotics applications, we are ready to fuel your idea and provide you with the tools and knowledge to bring it to reality."

    const arduinoText = "We focus on the intersection of Arduino, SBCs / Microcontrollers, and IoT, recognizing their immense potential for shaping the future.."

    const dronesText = "We explore topics such as flight dynamics, drone hardware and components, remote control systems, sensor integration, autonomous flight, and drone programming.Whether you're interested in building your own drone, optimising flight performance, or developing innovative applications, our interest group provides a platform to share knowledge, exchange ideas, and foster creativity."

    return (
        <div className='TechIG'>
            <h2>Interest Groups</h2>
            <div className="sep1"></div>
            <div className="igs">
                <DropdownText 
                    className={"electronics"}
                    imgsrc={electronicspic}
                    alt={"Electronics"}
                />
                <DropdownText
                    className={"arduino"}
                    imgsrc={arduinopic}
                    alt={"Arduino, SBCs, Microcontrollers, and IoT"}
                />
                <DropdownText
                    className={"drones"}
                    imgsrc={dronespic}
                    alt={"Drones"}
                />
                <DropdownText
                    className={"robotics"}
                    imgsrc={roboticspic}
                    alt={"Robotics"}
                />
            </div>
        </div>
    )
}

export default TechmaniacsIG