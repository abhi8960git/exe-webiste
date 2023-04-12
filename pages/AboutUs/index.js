import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card } from "../../components/index";
import css from "./AboutUs.module.css";
import { Contact } from "../../components/index";


const index = (props) => {

    console.log(props);

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


                            {
                              props.data.map((event)=>(

                                 <motion.div className={css.Item}>
                                    
                            {
                                <Card
                                key={event.id}
                                image={event.image}
                                detail={event.description}
                                title={event.title}

                                
                                ></Card>
                            }

                            </motion.div>
                              ))
                            }

                          

                        </motion.div>

                    </motion.div>

                    {/* <Contact></Contact> */}

                </div>

                <Contact />

            </div>

        </>
    )
}



export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/AboutUs");
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
}

export default index