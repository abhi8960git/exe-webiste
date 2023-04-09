import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

const Event = (props) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.events}>
                    <div className={styles.card}>
                        <Image
                            src={props.image}
                            alt={props.title}
                            width={250}
                            height={250}
                        ></Image>
                    </div>

                    <div className={styles.description}>
                        <h1>{props.title} </h1>
                        <p className={styles.mentors}>By: {props.mentor}</p>
                        <p className={styles.detail}>{props.detail}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Event;
