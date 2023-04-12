import Model from "./Model";
import classes from "./Home.module.css";

const Main = () => {
    return (
        <div className={classes.section}>
            {/* <Model className={classes.image} /> */}
            <div className={classes.text}>
                Our team from the Computer Science and Engineering Department is committed to technology and innovation, and we will showcase our latest projects at Techfest NIMBUS. With our enthusiasm and curiosity, we strive to continually push the boundaries and develop groundbreaking ideas.
            </div>
        </div>
    );
};

export default Main;
