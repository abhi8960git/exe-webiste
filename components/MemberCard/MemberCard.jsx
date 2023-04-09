import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import Link from "next/link";
import Image from "next/image";
import styles from "./MemberCard.module.css";
import { useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const MemberCard = (props) => {
    const [hover, setHover] = useState(false);

    const variant = {
        initial: {
            opacity: 0,
            y: "100%",
        },
        animate: {
            opacity: 1,
            y: "0",
            transition: {
                type: "spring",
                bounce: 0.5,
                delay: 0.1,
            },
        },
        exit: {
            opacity: 0,
            y: "100%",
        },
    };

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
                <motion.div
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.cardContent}
                >
                    <h3>{props.name}</h3>
                    <h2>{props.tagline}</h2>
                </motion.div>
            )}

            {hover && (
                <motion.ul
                    variants={variant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={styles.sci}
                >
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
                </motion.ul>
            )}
        </div>
    );
};

export default MemberCard;
