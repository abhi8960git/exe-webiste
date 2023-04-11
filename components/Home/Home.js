import Model from "./Model";
import classes from "./Home.module.css";

const Main = () => {
    return (
        <div className={classes.section}>
            {/* <Model className={classes.image} /> */}
            <div className={classes.text}>
                Our team, from the Computer Science & Engineering Department, is
                dedicated to technology and innovation, and will showcase our
                latest projects at Techfest NIMBUS. With our passion and
                curiosity, we strive to constantly push the boundaries and
                develop groundbreaking ideas.
            </div>
        </div>
    );
};

export default Main;
