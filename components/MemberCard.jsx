import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
    faCalendarDays,
    faCircleInfo,
    faHome,
    faListDots,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Image from 'next/image'
import membersImg from "../public/5cb05dd324000080094f68d5.jpeg"
import styles from "./index.module.css";
const MemberCard = () => {
    return (
        <div className={styles.container}>
            <div class={styles.card}>
                <div class={styles.content}>
                    <div class={styles.img}>
                        <Image src={membersImg}></Image>
                    </div>
                    <div class={styles.cardContent}>
                        <h3>Sai Pallavi</h3>
                        <h2>evo Khalde </h2>
                    </div>
                </div>
                <ul class={styles.sci}>
                    <li><a href="">
                        <FontAwesomeIcon
                            style={{ fontSize: "25px" }}
                            icon={faHome}
                        ></FontAwesomeIcon>
                    </a></li>

                    <li><a href="">
                        <FontAwesomeIcon
                            style={{ fontSize: "25px" }}
                            icon={faHome}
                        ></FontAwesomeIcon>
                    </a></li>

                    <li><a href="">
                        <FontAwesomeIcon
                            style={{ fontSize: "25px" }}
                            icon={faHome}
                        ></FontAwesomeIcon>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default MemberCard