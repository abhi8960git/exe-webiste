import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Particle from "@/components/Particle";
import Navbar from "@/components/Navbar/Navbar";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
    return (
        <>
            <Particle />

            <Component {...pageProps} />

            <Navbar />
        </>
    );
}
