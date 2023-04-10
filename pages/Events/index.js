import React from "react";
// import Events from "@/Components/Events";
import css from "./section.module.css";
import EventCards from "@/components/EventsCard"
import Event from "@/components/EventsCard/Event"

import Slide from "@/components/MemberCard/Slide.js"

const Events = (props) => {


    const UpcomingEvents = props.data.filter(item => item.id == 2);
    const PastEvents = props.data.filter(item => item.id == 1);
    // console.log(UpcomingEvents);
    // console.log(PastEvents);

    return (
        <div className={css.container}>
            <h1 className={css.head}>Events</h1>

            <h2 className={css.name}>Upcoming Events</h2>

            

              <EventCards events={UpcomingEvents}  > </EventCards>

           
           
             
            <h2 className={css.name}>Past Events</h2>
        <EventCards events={PastEvents}></EventCards>
            
            


            <div className={css.navSolver}></div>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/Events");
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}
export default Events;
