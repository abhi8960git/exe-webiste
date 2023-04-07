import classes from "./Social.module.css";
import Tags from "./Tags";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Social = () => {
    return (
        <div className={classes.social}>
            <Tags icon={faHome} />
        </div>
    );
};

export default Social;
