import React from "react";
import css from "./section.module.css";
import EventCards from "@/components/WorkshopCard";

const Workshop = (props) => {
// console.log(props);



    return (
        <div className={css.container}>
            <h1 className={css.head}>Workshops </h1>

            {/* <h2 className={css.name}>Upcoming Workshop</h2> */}

            <EventCards Workshop={props}> </EventCards>

            {/* <h2 className={css.name}>Past Workshop</h2> */}
            {/* <EventCards Workshop={PastWorkshop}></EventCards> */}

            {/* <div className={css.navSolver}></div> */}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/workshop");
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}
export default Workshop;
