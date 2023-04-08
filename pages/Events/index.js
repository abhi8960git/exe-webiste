import React from "react";
import { Event } from "../../components/index";
import css from "./section.module.css";

const Events = () => {
    return (
        <>
            <div className={css.container}>
                <h1 className={css.head}>Events</h1>
                <Event></Event>
            </div>
        </>
    );
};

export default Events;
