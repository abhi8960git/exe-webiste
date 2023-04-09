import Social from "../SocialIcon/Social";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <h1>Copyright @TEAM .EXE</h1> <Social />
        </div>
    );
};

export default Footer;
