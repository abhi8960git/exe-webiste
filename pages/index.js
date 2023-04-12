import Main from "@/components/Home/Home";
import classes from "@/styles/Home.module.css";
import Exe from "@/components/Exe/Exe";
import Image from "next/image";
import left from "../public/right.png";
import right from "../public/left.png";
const Home = () => {
    return (
        <div className={classes.indexContainer}>
            <div className={classes.header}>
                <h1>TEAM .EXE</h1>
                <p>Executing Ideas</p>
            </div>


            <div className={classes.midExe}>

            {/* <Image width={120} className={classes.left} src={left} alt="left"></Image> */}
            <div className={classes.model}>

                <Exe></Exe>

            </div>

            {/* <Image width={120} className={classes.right} src={right} alt="right"></Image> */}

            </div>
            <Main />

        </div>
    );
};

export default Home;
