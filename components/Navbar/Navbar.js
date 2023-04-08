import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
    faCalendarDays,
    faCircleInfo,
    faHome,
    faListDots,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <ul className={classes.navbar}>
            <li>
                <Link href="/">
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faHome}
                    ></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link href="/AboutUs">
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faCircleInfo}
                    ></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faUsers}
                    ></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faListDots}
                    ></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link href="/Events">
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faCalendarDays}
                    ></FontAwesomeIcon>
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
