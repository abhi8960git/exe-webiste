import React from "react";
import { Workshop } from "../index.js";
import { motion } from "framer-motion";
import Slide from "../MemberCard/Slide.js";
const EventCards = (props) => {
    console.log("hello" , props)
    return (
        <>


          <div>
                {props.Workshop.data.map((event, i) => (
                    <Slide>
                        <motion.div
                            initial={{ x: i % 2 ? "-100vw" : "100vw" }}
                            animate={{ x: "0" }}
                            transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                        >
                            <Workshop
                                key={event.id}
                                title={event.title}
                                image={event.image}
                                mentors={event.mentors}
                                detail={event.detail}
                            ></Workshop>
                        </motion.div>
                    </Slide>
                ))}

                {
                    props.Workshop.data.map((event)=>{
                        console.log(event.mentors);

                    })
                }
            </div>



            <h1>
                good
            </h1>
        </>
    );
};

export default EventCards;
