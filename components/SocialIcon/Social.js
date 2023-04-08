import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import classes from "./Social.module.css";

const Social = () => {
    return (
        <div className={classes.social}>
            <Link href="/">
                <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ fontSize: "30px" }}
                />
            </Link>
            <Link href="/">
                <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ fontSize: "30px" }}
                />
            </Link>
            <Link href="/">
                <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ fontSize: "30px" }}
                />
            </Link>
            <Link href="/">
                <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ fontSize: "30px" }}
                />
            </Link>
        </div>
    );
};

export default Social;
