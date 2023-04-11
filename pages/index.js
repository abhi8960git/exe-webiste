import Main from "@/components/Home/Home";
import classes from "@/styles/Home.module.css";
import Exe from "@/components/Exe/Exe";
const Home = () => {
    return (
        <div className={classes.indexContainer}>
            <div className={classes.header}>
                <h1>TEAM .EXE</h1>
                <p>Executing Ideas</p>
            </div>
               <Exe></Exe>
            <Main />

        </div>
    );
};

export default Home;
