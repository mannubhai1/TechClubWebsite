import React from "react";
import styles from "./Activities.module.css";
import { useEffect } from "react";

// activity card to display recent and upcoming events

const Activities = () => {
  var hidden1;
  var hidden2;

  useEffect(() => {
    hidden1 = document.querySelector(".recent"); // to get the element with class name 'recent'
    hidden2 = document.querySelector(".upcoming"); // to get the element with class name 'upcoming'
  }, []);

  const handleClick1 = () => {
    if (hidden1 !== null && hidden1.classList.contains("hidden")) {
      // to check if the element is hidden or not
      hidden1.classList.remove("hidden");
      hidden1.classList.add("flex");
      hidden2.classList.remove("flex");
      hidden2.classList.add("hidden");
    }
  };
  const handleClick2 = () => {
    if (hidden2 !== null && hidden2.classList.contains("hidden")) {
      // to check if the element is hidden or not
      hidden2.classList.remove("hidden");
      hidden2.classList.add("flex");
      hidden1.classList.remove("flex");
      hidden1.classList.add("hidden");
    }
  };

  return (
    <>
      <main>
        <section id={styles.mainCard}>
          <div>
            <img id={styles.profilePic} src="./gv_image/gv.jpg" alt="GV" />
            <p className="text-xl">Events of</p>
            <h1 className="text-5xl">Gagan Vedhi</h1>
          </div>
          <fieldset>
            <div className={`flex flex-col md:flex-wrap p-0 h-[25vh]`}>
              <div className={styles.eventDiv}>
                <button
                  onClick={handleClick1}
                  className={`px-[4.8vh] py-4 font-sans text-xl font-bold `}
                >
                  {" "}
                  <h3 className={styles.eventheading}>RECENT EVENTS</h3>
                </button>
              </div>
              <div className={styles.eventDiv}>
                <button
                  onClick={handleClick2}
                  className={`px-5 py-4 m-auto font-sans text-xl font-bold`}
                >
                  <h3 className={styles.eventheading}>UPCOMING EVENTS</h3>
                </button>
              </div>
            </div>
          </fieldset>
        </section>
        <div className="flex flex-col gap-8 ml-8 w-[72vw]">
          <div className={`recent flex flex-row gap-4 ${styles.eventView}`}>
            {/* to display recent events */}
            <div className={`${styles.activityContainer}`}>
              <h2>Regional Science Centre Trip</h2>

              <p>
                A three-hour trip to RSC of Tirupati for a sky-gazing session.
              </p>
            </div>
            <div className={`${styles.activityContainer}`}>
              <h2>Athereum</h2>

              <p>
                A Joint fest organized by Astronomy Clubs of IIT and IISER
                Tirupati in which many competitions were conducted.
              </p>
            </div>
            <div className={`${styles.activityContainer}`}>
              <h2>LIGO Workshop</h2>
              <p>
                A two-day Offline workshop on Gravitational Waves Detection by
                Dr. Apratim and Dr. Suresh from IUCAA Pune. It had received huge
                participation from IIT and IISER Tirupati. The first day was
                held at IISER, and the second day at IIT.
              </p>
            </div>
          </div>

          <div className={`upcoming hidden flex-row gap-4 ${styles.eventView}`}>
            {" "}
            {/* to display upcoming events */}
            <div className={`${styles.activityContainer2}`}>
              <div className={styles.upcomingEvents}>
                <h3 className={`text-white px-2`}>Documentary cum quiz 3.0</h3>
              </div>
              <div className={styles.upcomingEvents}>
                <h3 className={`text-white px-2`}>Movie night</h3>
              </div>
              <div className={styles.upcomingEvents}>
                <h3 className={`text-white px-2`}>ML Workshop series</h3>
              </div>
              <div className={styles.upcomingEvents}>
                <h3 className={`text-white px-2`}>
                  A working rocket model(Project)
                </h3>
              </div>
              <div className={styles.upcomingEvents}>
                <h3 className={`text-white px-2`}>
                  StarGazing (For some special events)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Activities;
