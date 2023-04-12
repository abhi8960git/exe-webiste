import css from "./Card.module.css";
import { motion } from "framer-motion";
import { MemberCard } from "../../components/index";

const Card = (props) => {
    const variant = {
        initial: {
            x: "-100vw",
        },
        animate: {
            x: 0,
            transition: {
                bounce: 0,
                delay: 0.1,
            },
        },
    };

    return (
        <>
            <motion.div
                variants={variant}
                initial="initial"
                animate="animate"
                className={css.year}
            >
                {props.year.map((item) => (
                    <MemberCard
                        key={item.key}
                        image={item.imageURL}
                        name={item.name}
                        tagline={item.tagline}
                        github={item.github}
                        LinkedIn={item.linkedin}
                    />
                ))}
            </motion.div>
        </>
    );
};

export default Card;
