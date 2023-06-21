import electronicspic from '../../images/tm.jpeg'
import arduinopic from '../../images/tm.jpeg'
import dronespic from './Techmaniacs_club_project_Drone_Build_2.jpg'
import roboticspic from '../../images/tm.jpeg'
import DropdownText from './DropdownText'

const TechmaniacsIG = () => {
    const electronicsText = "Electronics holds immense importance in today's interconnected world, permeating every aspect of our lives. It powers the devices we rely on daily, from smartphones and computers to household appliances and transportation systems. Electronics enables communication, information processing, and storage, fostering connectivity and facilitating global collaboration. It plays a critical role in advancing fields such as medicine, transportation, and energy, driving innovation and improving efficiency. Electronics also contributes to sustainable development, enabling renewable energy generation, energy-efficient technologies, and smart grid systems. With its ability to transform ideas into reality, electronics continues to revolutionize industries, enhance quality of life, and shape the future of technology. From basic circuit design to advanced electronics projects, we provide you components and resources to bring them to reality. Dive into the world of digital and analog electronics, explore sensor integration, or learn about emerging technologies like flexible electronics and wearables. In our interest group, we embrace the multidisciplinary nature of electronics, combining elements of physics, engineering, computer science, and creativity to push the boundaries of what's possible. From foundational concepts like Ohm's law and circuit analysis to advanced topics such as microcontrollers, robotics, and embedded systems, we delve into a wide range of areas that make up the fascinating world of electronics. We encourage theoretical exploration and practical implementation, helping you gain the necessary skills to bring your ideas to fruition. Whether you're interested in building your own gadgets, designing PCBs, or exploring the intricacies of digital logic, our group offers a platform to share knowledge, seek guidance, and foster innovation."

    const roboticsText = "Robotics plays a crucial role in today's world, offering immense importance across various domains. From manufacturing industries to healthcare, exploration, and even daily life, robotics revolutionizes efficiency, precision, and safety. Robots automate repetitive tasks, increasing productivity and freeing up human resources for more complex endeavors. They enable precise surgical procedures, assist in hazardous environments, and facilitate exploration in space and underwater. Moreover, robotics fosters innovation and technological advancements, pushing boundaries to create new solutions that enhance human lives. As a transformative field, robotics continues to shape the future, offering countless possibilities for enhancing efficiency, safety, and quality of life. In the realm of robotics, we delve into various aspects such as autonomous navigation, artificial intelligence, and human - robot interaction.We focus on designing, developing, and programming autonomous machines that can interact with their environment and perform tasks with precision and intelligence.From building and programming your first robot to advanced robotics applications, we are ready to fuel your idea and provide you with the tools and knowledge to bring it to reality."

    const arduinoText = "Microcontrollers, IoT (Internet of Things), and single-board computers are key pillars in the digital revolution, offering vital importance in various domains. Microcontrollers serve as the brain of countless embedded systems, providing control and intelligence to devices ranging from smart appliances to industrial automation. They enable efficient data processing, sensor integration, and connectivity, powering the IoT ecosystem. IoT, in turn, connects devices, objects, and systems to the internet, enabling seamless communication, data exchange, and automation. It revolutionizes industries like healthcare, agriculture, and transportation, optimizing operations, improving safety, and enhancing resource management. Single-board computers, such as the Raspberry Pi, combine the power of a computer into a compact form factor, facilitating prototyping, experimentation, and educational initiatives. They empower enthusiasts, students, and professionals to develop innovative solutions, from robotics to home automation. Together, microcontrollers, IoT, and single-board computers fuel the digital transformation, enabling a smarter, connected world with endless possibilities for innovation and progress. In our interest group, we focus on the intersection of Arduino, SBCs / Microcontrollers, and IoT, recognizing their immense potential for shaping the future.Arduino's user-friendly hardware and software open up a world of possibilities for prototyping and building electronic devices. SBCs and microcontrollers, such as Raspberry Pi or ESP32, empower us to create sophisticated projects and interface with various sensors, actuators, and peripherals. And when combined with IoT technologies, we can connect our creations to the internet, enabling seamless communication and control. From basic concepts like programming in Arduino IDE or Python to advanced topics like sensor integration, data acquisition, cloud connectivity, and automation, our interest group provides a platform for continuous learning and growth."

    const dronesText = "Drones have emerged as a pivotal technology with significant importance in diverse sectors. Their versatility and accessibility enable a wide range of applications, including aerial photography, surveillance, search and rescue operations, delivery services, and agricultural monitoring. Drones provide valuable aerial perspectives, capturing high-resolution images and videos that were once inaccessible. They enhance safety and efficiency in surveillance, allowing for remote monitoring of areas and quick response to emergencies. In logistics, drones offer rapid and cost-effective delivery solutions, particularly in remote or inaccessible areas. Additionally, drones facilitate precision agriculture by providing real-time data on crop health and optimizing resource allocation. Also, in today’s world with the onset of modern warfare, they have proven their capabilty as potential weapons on the battlefield and a race for drone warfare has begun between countries. With their potential for transformative impact, drones are reshaping industries and opening up new possibilities for innovation and efficiency. The Drones Interest Group is a vibrant community of drone enthusiasts who share a common love for these remarkable flying machines.We embrace the wide range of applications that drones offer.From aerial photography and videography to search and rescue operations, environmental monitoring, precision agriculture, and even racing.We explore topics such as flight dynamics, drone hardware and components, remote control systems, sensor integration, autonomous flight, and drone programming.Whether you're interested in building your own drone, optimising flight performance, or developing innovative applications, our interest group provides a platform to share knowledge, exchange ideas, and foster creativity."

    return (
        <div className='TechIG'>
            <h2>Interest Groups</h2>
            <div className="sep1"></div>
            <div className="igs">
                <DropdownText 
                    className={"electronics"}
                    imgsrc={electronicspic}
                    alt={"Electronics"}
                    text={electronicsText}
                />
                <DropdownText
                    className={"arduino"}
                    imgsrc={arduinopic}
                    alt={"Arduino, SBCs/Microcontrollers, and IoT"}
                    text={arduinoText}
                />
                <DropdownText
                    className={"drones"}
                    imgsrc={dronespic}
                    alt={"Drones"}
                    text={dronesText}
                />
                <DropdownText
                    className={"robotics"}
                    imgsrc={roboticspic}
                    alt={"Robotics"}
                    text={roboticsText}
                />
            </div>
        </div>
    )
}

export default TechmaniacsIG