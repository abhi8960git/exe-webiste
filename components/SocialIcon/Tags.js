import classes from "./Tags.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
    

const Tags = (props) => {
    return (
        <Link href="/" className={classes.tag}>
            <FontAwesomeIcon
                style={{ fontSize: "25px" }}
                icon={props.icon}
            ></FontAwesomeIcon>
        </Link>
    );
};

export default Tags;
