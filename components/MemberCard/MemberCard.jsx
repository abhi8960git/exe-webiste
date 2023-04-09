import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import Link from "next/link";
import Image from "next/image";
import styles from "./MemberCard.module.css";
import { useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MemberCard = (props) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={styles.container}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={styles.img}>
                <Image src={props.image} width={300} height={300}></Image>
            </div>
            {!hover && (
                <div className={styles.cardContent}>
                    <h3>{props.name}</h3>
                    <h2>{props.tagline}</h2>
                </div>
            )}
            {hover && (
                <ul className={styles.sci}>
                    <li>
                        <Link href={props.github}>
                            <FontAwesomeIcon
                                style={{ fontSize: "25px" }}
                                icon={faGithub}
                            ></FontAwesomeIcon>
                        </Link>
                    </li>
                    <li>
                        <Link href={props.LinkedIn}>
                            <FontAwesomeIcon
                                style={{ fontSize: "25px" }}
                                icon={faLinkedin}
                            ></FontAwesomeIcon>
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default MemberCard;
