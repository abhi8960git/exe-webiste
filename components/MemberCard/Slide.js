import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Slide = (props) => {
    const ref = useRef(null);
    const Use = useInView(ref, { once: true });
    return (
        <>
            <motion.div ref={ref} style={{ minHeight: "100px" }}>
                {Use && props.children}
            </motion.div>
        </>
    );
};

export default Slide;
