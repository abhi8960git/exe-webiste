import "@/styles/globals.css";
// import "@/styles/contact.scss";
import "../styles/contact.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Particle from "@/components/Particle";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import AnimatePages from "@/components/AnimatingPages/AnimatePages";
import { useRouter } from "next/router";
config.autoAddCss = false;
import Image from "next/image";
import background from "../public/back.png";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            {/* <Particle /> */}

            <Image className="background"   src={background}></Image>
            <AnimatePresence mode="wait">
                <AnimatePages key={router.route}>
                    <Component {...pageProps} />
                </AnimatePages>
            </AnimatePresence>
            <Navbar />
            <Footer />
        </>
    );
}
