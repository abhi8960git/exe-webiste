import React from "react";
import Image from "next/image";
import sai from "../public/5cb05dd324000080094f68d5.jpeg";
import styles from "../components/index.module.css";
const Card = () => {
    return (
        <div className="swiper-slide">
            <div className={styles.AboutUs}>
                <div className={styles.teamImg}>
                    <Image src={sai} width={300} alt="iamge"></Image>
                </div>

                <div className={styles.detail}>
                    <h1>TEAM EXE</h1>
                    <p>
                        We are a team that upholds creativity and we
                        continuously strive for excellence. Each year, we bring
                        a plethora of projects and events in NIMBUS.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
