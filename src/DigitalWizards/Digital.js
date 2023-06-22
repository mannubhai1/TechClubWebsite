import React from 'react';
import './Digital.css';
import {motion} from 'framer-motion'
import { dsaplans } from '../dsalists/dsaplans';

export default function Digital(params) {
    return(
        <section className='D_wizard'>
            <div className='DigitalWizard'>
            <div className='dsa-left'>
                <div className='Dsa-imgcontainer'>
                    <img src="./dsa_image/dsalogo.jpg" alt=''/>
                   
                </div>
                <div>
                <motion.div className=' dsa-start'
                 initial={{y: "2rem",opacity:0}}
                 whileInView={{y:0,opacity:1}}
                 transition={{
                     duration: 2,
                     type: "spring"
                 }}
                >
                    <h1>
                       Explore the<br/>
                        Digital World
                    </h1>
                </motion.div>
                <div className='h-subtitle'>Our main objective is to improve the knowledge of
                    others by sharing the information mostly focused on improving coding and dsa 
                    skills and to encourage people to dive into the world of programming.
                </div>
                </div>
               
                <br></br>

             </div>
             <div className='dsa-right'>
                <div className='dsa_row1'>
                <img src="./dsa_image/dsa2.jpg" alt=''/>
                </div>
             </div>
            </div>
           <div className='dsa_plans'>
           <div className="pro-head ">
                <span className="stroke-text ">EXPLORE </span>
                <span>PROGRAMS</span>
                <span className="stroke-text">TO JOIN</span>
            </div>
            <br></br>
            <br></br>
            <div className="dsaprog-list">
                   {
                    dsaplans.map((card,i)=>(
                        <div className="dsalist">
                            
                            <div className="p-head">{card.heading}</div>
                            <div className="p-content">{card.details}</div>
                           
                            <div className="dsajoin  ">
                                <span className="secondaryText">Join now</span>
                                 <img src="./dsa_image/rightArrow.png"></img>
                            </div>
                            
                          </div>   
                    ))
                   }
                </div>
           </div>
           <br></br>
           <br></br>
        </section>
    )
};
