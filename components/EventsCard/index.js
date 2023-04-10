import React from "react";
import { Event } from "../index.js";
import { motion } from "framer-motion";
import Slide from "../MemberCard/Slide.js";
const EventCards = (props) => {
    return (
        <>
            <div>
                {props.events.map((event, i) => (
                    <Slide>
                        <motion.div
                            initial={{ x: i % 2 ? "-100vw" : "100vw" }}
                            animate={{ x: "0" }}
                            transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                        >
                            <Event
                                key={event.id}
                                title={event.title}
                                image={event.image}
                                detail={event.text}
                            ></Event>
                        </motion.div>
                    </Slide>
                ))}
            </div>
        </>
    );
};

export default EventCards;
