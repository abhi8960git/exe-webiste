import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
    faCalendarDays,
    faCircleInfo,
    faHome,
    faUsers,
    faFileInvoice,
    faTrophy,
    faChartSimple,
    faMobile
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(Boolean);
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
            <li>
                <Link
                    href="/Workshops"
                    className={router == "/Workshops" ? classes.active : undefined}
                >
                    <FontAwesomeIcon
                        style={{ fontSize: "25px" }}
                        icon={faFileInvoice}
                        // bounce
                        // onMouseEnter={}
                        
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
                        icon={faMobile}
                        // bounce
                        // onMouseEnter={}
                        
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
                        icon={faTrophy}
                        // bounce
                        // onMouseEnter={}
                        
                    ></FontAwesomeIcon>
                </Link>
            </li>

        </ul>
    );
};

export default Navbar;
