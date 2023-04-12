import React from "react";
import styles from "./Event.module.css";
import Image from "next/image";

const Event = (props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.events}>
                    <div className={styles.card}>
                        <Image
                        
                            key={props.id}
                            src={props.image}
                            alt={props.title}
                            width={250}
                            height={250}
                        ></Image>
                    </div>

                    <div className={styles.description}>
                        <h1>{props.title} </h1>
                        <p className={styles.detail}>{props.detail}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Event;
