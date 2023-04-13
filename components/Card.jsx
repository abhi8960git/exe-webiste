import React from "react";
import Image from "next/image";
import sai from "../public/5cb05dd324000080094f68d5.jpeg";
import styles from "../components/index.module.css";
const Card = (props) => {
    return (
        <div className="swiper-slide">
            <div className={styles.AboutUs}>
                <div className={styles.teamImg}>
                    <Image src={props.image} width={300} height={200} alt="image"></Image>
                </div>

                <div className={styles.detail}>
                    <h1>{props.title}</h1>
                    <p>{props.detail}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
