import React from 'react';
import Image from 'next/image';
import tnc from "../public/Trade_Code_ojw5du.png";
import styles from "./index.module.css";



const Event = () => {
  return (
    <>
    

    <div className={styles.container}>
      <div className={styles.events}>


        <div className={styles.card}>
          <Image
            src={tnc}
            alt="trade_and_code"
            width={250}
            placeholder='blur'
          >
          </Image>
        </div>

        <div className={styles.description}>

          <h1>Trade and Code </h1>
          <p className={styles.mentors}>By: Mrigank Anand and Anant Verma</p>
          <p className={styles.detail}>Trade and Code brings a fun amalgamation of economics and coding. It is an event based on real-time trading and problem solving while managing your balance. Each team will be provided with a certain amount of virtual currency, and they have to buy various components and libraries required to write a code (eg: loops, if-else statements, string library, classes, etc).
            The best coders and traders win exciting prizes!</p>
        </div>


      </div>

      </div>

      
    </>
  )
}

export default Event