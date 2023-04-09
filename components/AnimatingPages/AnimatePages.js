import { motion } from "framer-motion";

const AnimatePages = (props) => {
    const variant = {
        initial: {
            y: "100vh",
            opacity: 0,
        },
        animate: {
            y: "0vh",
            opacity: 1,
            transition: {
                type: "spring",
                delay: 0.1,
            },
        },
        exit: {
            y: "-100vh",
            opacity: 0,
        },
    };
    return (
        <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {props.children}
        </motion.div>
    );
};

export default AnimatePages;
