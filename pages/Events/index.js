import React from "react";
import css from "./section.module.css";
import EventCards from "@/components/EventsCard";

const Events = (props) => {
    const UpcomingEvents = props.data.filter((item) => item.id == 2);
    const PastEvents = props.data.filter((item) => item.id == 1);

    return (
        <div className={css.container}>
            <h1 className={css.head}>Events</h1>

            <h2 className={css.name}>Upcoming Events</h2>

            <EventCards events={UpcomingEvents}> </EventCards>

            <h2 className={css.name}>Past Events</h2>
            <EventCards events={PastEvents}></EventCards>

            <div className={css.navSolver}></div>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch(`${process.env.exe}/api/Events`);
    const data = await response.json();

    return {
        props: {
            data,
        },
    };


}
export default Events;
