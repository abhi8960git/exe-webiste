import Main from "@/components/Home/Home";
import classes from "@/styles/Home.module.css";

const Home = () => {
    return (
        <div className={classes.indexContainer}>
            <div className={classes.header}>
                <h1>TEAM .EXE</h1>
                <p>Executing Ideas</p>
            </div>
            <Main />
        </div>
    );
};

export default Home;
