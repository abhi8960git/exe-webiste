import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card } from "../../components/index";
import css from "./AboutUs.module.css";
import ContactUs from "../Events";



const index = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <>

            <h1 className={css.head}>About Us</h1>
            <div className={css.AboutUs}>





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

                    {/* <Contact></Contact> */}

                </div>

                {/* <ContactUs></ContactUs> */}

                <div classname={css.ContactUs}>

                    <div className={css.Container}>
                        <h1>
                            Contact Us
                        </h1>

                        <div className={css.InputDiv}>

                            <div className={css.Inputs}>
                                <label>
                                    Email Us
                                </label>

                                <input className={css.input}></input>
                            </div>

                            <div>
                                <label>
                                    Email Us
                                </label>

                                <input></input>
                            </div>

                            <div >
                                <label>
                                    Email Us
                                </label>
                                <textarea></textarea>
                            </div>

                        </div>


                    </div>

                </div>
            </div>

        </>
    )
}

export default index