import Footer from "@/Components/Footer/Footer";
import classes from "@/styles/Home.module.css";
import Main from "@/Components/Home/Home";
import Social from "@/Components/SocialIcon/Social";

const Home = () => {
    return (
        <>
            <div className={classes.header}>
                <h1>TEAM .EXE</h1>
                <p>Executing Ideas</p>
            </div>
            <Main />
            <Social />
            <Footer />
        </>
    );
};

export default Home;
