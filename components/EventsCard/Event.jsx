import React from 'react'
import styles from "./Event.module.css"
import { cookies } from "next/dist/client/components/headers";
import Image from "next/image";
import Slide from "@/components/MemberCard/Slide"

const Event = (props) => {

    // console.log(props);
    // const title = props;
    // console.log(title);
  return (
    <>
    <Slide >
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
                  {/* <p className={styles.mentors}>By: {props.mentor}</p> */}
                  <p className={styles.detail}>{props.detail}</p>
              </div>
          </div>
        </div>
        </Slide>

  </>
  )
}

export default Event;