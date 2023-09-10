import React from "react";
import './Wplans.css';
import { wingData } from "../../../data/wingData";

export default function Wprevplans(params) {
    return (
        <section className="main " id='wplans'>
            <div className="pro-head">
                <span className="stroke-text">Our</span>
                <span>previous</span>
                <span className="stroke-text">Events</span>
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

                <div className="wplancard">

                    {
                        wingData.map((card, i) => (
                            <div className="wlists">
                                <div className="wplan" key={i}>{card.icon} </div>
                                <div className="secondarytext" >{card.name}</div>
                                <div className="wfeatures flexcolumn">
                                    {
                                        card.features.map((no, i) => (
                                            <div className="wfeature flexx">
                                                <img src="./dsa_image/whiteTick.png" />
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
