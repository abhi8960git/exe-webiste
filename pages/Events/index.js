import React from "react";
import { Event } from "../../components/index";
import css from "./section.module.css";

const Events = (props) => {
    return (
        <>
            <div className={css.container}>
                <h1 className={css.head}>Events</h1>
                {props.data.map((item) => (
                    <Event
                        image={item.image}
                        title={item.title}
                        mentor={item.mentor}
                        detail={item.detail}
                    />
                ))}
            </div>
        </>
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
