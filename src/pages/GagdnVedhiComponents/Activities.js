import React from 'react'
import styles from './Activities.module.css'

const Activities = () => {

    const url = "https://raw.githubusercontent.com/iMJ007/Time-Tracking-Dashboard/main/data.json";
let dataList = "";
const fetchJson = async () => {
    try {
        const data = await fetch(url);
        dataList = await data.json();
        updateValues();
    } catch (error) {
        console.log(error);
    }
};
const activityContainers = document.querySelectorAll(".activityContainer");
const periods = document.querySelectorAll('input[type="radio"]');

const updateValues = (period = 'past') => {
    for (const activityContainer of activityContainers) {
        if (!dataList){
            return;
        }
        let activityType = activityContainer.querySelector('span:first-child').innerText;
        let activityDetails = dataList.find((object) => object.title === activityType);
        let activityTimeFrame = activityDetails.timeframes[`${period}`];
        console.log(activityDetails);
        activityContainer.querySelector('h2').innerText = `${activityTimeFrame.current}hr${activityTimeFrame.current > 1 ? 's' : ''}`;

        if (period !== 'past'){
            activityContainer.querySelector('p').innerText = `Last ${period === 'current' ? 'Week' : 'Month'} - ${activityTimeFrame.previous}hr${activityTimeFrame.previous > 1 ? 's' : ''}`;
        } else{
            activityContainer.querySelector('p').innerText = `Yesterday - ${activityTimeFrame.previous}hr${activityTimeFrame.previous > 1 ? 's' : ''}`;
        }

    }
}

for (let period of periods) {
    period.addEventListener('change', () => {
        updateValues(period.value.toLowerCase());
    })
}

fetchJson();

    return (
        <>
            <main>

            <section id={styles.mainCard}>

                <div>
                    <img id={styles.profilePic} src="./gv_image/gv.jpg" alt="GV"/>
                        <p className='text-xl'>Events of</p>
                        <h1 className='text-5xl'>Gagan Vedhi</h1>
                </div>
                <fieldset>
                    {/* <input type="radio" name="period" id={styles.past} value="past" checked/><label htmlFor="past">Past Events</label>
                    <input type="radio" name="period" id={styles.current} value="current"/><label htmlFor="current">Current Events</label>
                    <input type="radio" name="period" id={styles.upcoming} value="upcoming"/><label htmlFor="upcoming">Upcoming Events</label> */}
                    <div className={`p-0 h-[20vh] m-auto w-full ${styles.eventdiv}`}>
                            <button className='px-4 py-8 m-auto font-sans text-xl font-bold'><h3 className={styles.eventheading}>Upcoming Events</h3></button>
                        {/* <button className=' border-sky-00 border-4 px-20'>Previous Events</button>
                        <button className=' border-sky-00 border-4 px-20'>Previous Events</button> */}
                    </div>
                </fieldset>

            </section>

            <div className={styles.activityContainer}>
                {/* <span>Work</span> */}
                {/* <img className={styles.menuButton} src="https://github.com/iMJ007/Time-Tracking-Dashboard/raw/main/images/icon-ellipsis.svg" alt="menu"/> */}
                    <h2>Event 1</h2>

                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa at, praesentium, ad quis tempore aliquid delectus impedit quibusdam dolorum sed voluptatem reprehenderit doloremque rerum molestias eius, et quam animi.</p>
                    <span>dd/mm/yyyy</span>

            </div>


            <div className={styles.activityContainer}>
                {/* <img className={styles.menuButton} src="https://github.com/iMJ007/Time-Tracking-Dashboard/raw/main/images/icon-ellipsis.svg" alt="menu"/> */}
                    <h2>Event 2</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga incidunt magni, error, id nesciunt exercitationem nihil molestiae optio facilis libero a odio eaque adipisci, perferendis consequatur quos dolore reiciendis!</p>
                    <span>dd/mm/yyyy</span>

            </div>
            <div className={styles.activityContainer}>
                {/* <img className={styles.menuButton} src="https://github.com/iMJ007/Time-Tracking-Dashboard/raw/main/images/icon-ellipsis.svg" alt="menu"/> */}
                    <h2>Event 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui fugiat sapiente, iste adipisci architecto eius quidem cumque officia optio dolorum. Nemo vel optio voluptas maiores hic quasi, minus distinctio!</p>
                    <span>dd/mm/yyyy</span>

            </div>
            {/* <div className={styles.activityContainer}>
                
                <img className={styles.menuButton} src="https://github.com/iMJ007/Time-Tracking-Dashboard/raw/main/images/icon-ellipsis.svg" alt="menu"/>
                    <h2>1hr</h2>
                    <p>Previous - 1hr</p>
            </div>
            <div className={styles.activityContainer}>
                <span>Social</span>
                <img className={styles.menuButton} src="https://github.com/iMJ007/Time-Tracking-Dashboard/raw/main/images/icon-ellipsis.svg" alt="menu"/>
                    <h2>1hr</h2>
                    <p>Previous - 3hrs</p>
            </div>
            <div className={styles.activityContainer}>
                <span>Self Care</span>
                <img className={styles.menuButton} src="https://github.com/iMJ007/Time-Tracking-Dashboard/raw/main/images/icon-ellipsis.svg" alt="menu"/>
                    <h2>0hrs</h2>
                    <p>Previous - 1hr</p>
            </div> */}
        </main>
    </>
    )
}

export default Activities
