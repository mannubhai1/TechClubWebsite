import React from "react";
import './Prevplans.css';
import { dwprevData } from "../../../data/dwprevData";

export default function Preplans(params) {
    return(
        <section className="main " id='dplans'>
        <div className="pro-head">
            <span className="stroke-text">Explore our</span>
            <span>previous</span>
            <span className="stroke-text">Programs</span>
        </div>
        <br></br>
        <br></br>
        <div>
         {/* <div className="grad pad">
            <div className="grad1">
              <div className="orange-grd"></div>
            </div>
             <div className="grad2">
             <div className="orange-grd"></div>
             
             </div>
         
         </div> */}

        <div className="dplancard">
       
       {
        dwprevData.map((card,i)=>(
            <div className="dlists">
                     <div className="dplan" key={i}>{card.icon} </div>
                     <div className="secondarytext" >{card.name}</div>
                     <div className="dfeatures flexcolumn">
                        {
                            card.features.map((no,i)=>(
                                <div className="dfeature flex">
                                    <img src="./dsa_image/whiteTick.png"/>
                                    <span>{no}</span>
                                    <br></br>
                                </div>
                            ))
                        }
                     </div>
                     <div className="thirdtext"></div>
                     <button></button>

            </div>
        ))
       }
    </div>

        </div>
        
    </section>
    )
};
