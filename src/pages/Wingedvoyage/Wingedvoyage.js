import React,{useState} from 'react';
import './Wingedvoyage.css';
import CountUp from "react-countup";
import {motion} from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import 'react-accessible-accordion/dist/fancy-example.css';
import wingdata from '../dsalists/accordion';
import { IoIosMail } from 'react-icons/io'
import { FiPhone } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'


export default function Wingedvoyage(params) {
  const [className,setClassName] = useState(null)
 
     return(
        <section className='wing' id="wingedvoyage">
          
           <div className="w_header">
             {/* left side */}
             <div className='w-left'>
            
                <h1 className='w-heading'>Winged Voyage</h1>
                <br></br>
                <motion.div className='w-start'
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{
                     duration: 3,
                     type: "spring"
                 }}
                >
                  <div className="orange-circle"/>
                    <h1>
                        Start <br/>
                        your Engine <br/>
                        Here
                    </h1>
                </motion.div>
                <span className='w-subtitle'>pursue your imagination and dream on  automobiles
                    <br/>
                    here and create variety of products
                </span>
                <br></br>
                <div className='flex w-engines'>
                <div className="w-stat">
                               <span className='w-count'>
                                 <CountUp start={80} end={120} duration={3}/>
                                 <span>km/hr</span>    
                                </span>

                                <span>
                                     speed meter
                                </span>
                           
                        </div>
                        <div className="w-stat">
                             <span className='w-count'>
                                 <CountUp start={190} end={200} duration={3}/>
                                 <span>km</span>
                             </span>

                                <span>
                                    Distance meter
                                </span>
                        </div>
                        <div className="w-stat">
                              <span className='w-count'>
                                 <CountUp  end={28} />
                                 <span>Ltr</span>
                             </span>

                                <span>
                                   Fuel meter
                                </span>
                         </div>       
                </div>
             </div>
             <div className='w-right'>
                    <motion.div className='img-container'
                       initial={{x:"3rem",opacity:1}}
                       whileInView={{x:0,opacity:1}}
                       transition={{
                          duration: 2,
                          type: "spring"
                      }}
                    >
                        <img src="./w_image/racecar2.png" alt=""/>
                    </motion.div>
             </div>
           </div>
          
           <div className='w-content'>
             <div className='wf1img'> 
               <img src="./w_image/f1carwing.jpg" alt=""/>
             </div>
             <div className='w-goals'>
             <span  className="w-orangeText">Our Goal</span> 
                 <Accordion 
                 className="accordion"
                 allowMultipleExpanded={false}
                 preExpanded={[0]}>
                    {
                        wingdata.map((items,i)=>{
                            
                            return(
                               <AccordionItem className="accordionItem" key={i} uuid={i}>
                                  <AccordionItemHeading>
                                       <AccordionItemButton className="flexCenter accordionButton">

                                        {/* below not used since there was an error */}
                                           <AccordionItemState>
                                               {({expanded})=>
                                                 expanded
                                                 ?setClassName("expanded")
                                                 :setClassName("collapsed")
                                               }
                                           </AccordionItemState>
                                           
                                           <div className="flexCenter w-icon">{items.icon}</div>
                                           <span className="primaryText">
                                            {items.heading}
                                           </span>
                                           <div className="flexCenter w-icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                           </div>
                                       </AccordionItemButton>
                                  </AccordionItemHeading>
                                   <AccordionItemPanel>
                                     <p className="secondaryText">{items.detail}</p>
                                   </AccordionItemPanel>

                               </AccordionItem>
                            )
                        })
                    }
                 </Accordion>
 
             </div>
           </div>
          
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <div className='w-flexcolumn'>
           <div className="j-wrapper  ">
              <div className="joins">
            <span className=" prim">Contact Us </span>
            <span className="sec">Contact us through mail by clicking below box
             and ask any queries you have.
            </span>
            <div className="Wingfooter">
                    
                            <AiFillLinkedin
                                role='button'
                                aria-label='Linkedin'
                                size={35}
                                tabIndex="4"
                                color='white'>
                                         <a href="https://www.linkedin.com/in/automobile-club-iitt-b2382827a/"></a>
                                </AiFillLinkedin>
                           
                       
                            <FaInstagram
                                role='button'
                                aria-label='Instagram'
                                size={35}
                                tabIndex="3"
                                color='white'>
                                <a href=" https://www.instagram.com/automobileclub.iitt/ "></a>
                                </FaInstagram>
                           
                        
                        
                            <FaFacebook
                                role='button'
                                aria-label='Discord'
                                size={35}
                                tabIndex="2"
                                color='white'>
                                        <a href=" https://www.facebook.com/profile.php?id=100093556119655 "></a>
                                </FaFacebook>
                           
                        
            </div>
            <IoIosMail size={50} className="W-button">
                <a href="mailto:ratnakumar48070@gmail.com">Contact us</a>
               </IoIosMail>
            </div>
        
              
        </div>
           
           </div>
           <br></br>
        
           
        </section>
     )
};
