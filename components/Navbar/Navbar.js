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
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter().pathname;
    return (
        <ul className={classes.navbar}>
            <li>
                <Link
                    href="/"
                    className={router == "/" ? classes.active : undefined}
                >
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faHome}
                    ></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link
                    href="/AboutUs"
                    className={
                        router == "/AboutUs" ? classes.active : undefined
                    }
                >
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faCircleInfo}
                    ></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link
                    href="/OurTeam"
                    className={
                        router == "/OurTeam" ? classes.active : undefined
                    }
                >
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faUsers}
                    ></FontAwesomeIcon>
                </Link>
            </li>
            <li>
                <Link
                    href="/Events"
                    className={router == "/Events" ? classes.active : undefined}
                >
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
