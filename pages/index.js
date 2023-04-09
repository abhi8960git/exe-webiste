import Footer from "@/components/Footer/Footer";
import classes from "@/styles/Home.module.css";
import Main from "@/components/Home/Home";
import Social from "@/components/SocialIcon/Social";

const Home = () => {
    return (
        <>
            <div className={classes.indexContainer}>
                <div className={classes.header}>
                    <h1>TEAM .EXE</h1>
                    <p>Executing Ideas</p>
                </div>
                <Main />

                <div className={classes.footer}>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
