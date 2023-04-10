import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card } from "../../components/index";
import css from "./AboutUs.module.css";



const index = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <div className={css.AboutUs}>



            <h1 className={css.head}>About Us</h1>

            <div className={css.aboutUsContainer}>
                <motion.div ref={carousel} className={css.carousel}>
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={css.innerCarousel}>

                        <motion.div className={css.Item}>
                            <Card></Card>
                        </motion.div>

                        <motion.div className={css.Item}>
                            <Card></Card>
                        </motion.div>

                        <motion.div className={css.Item}>
                            <Card></Card>
                        </motion.div>

                        <motion.div className={css.Item}>
                            <Card></Card>
                        </motion.div>

                    </motion.div>

                </motion.div>

            </div>
        </div>
    )
}

export default index