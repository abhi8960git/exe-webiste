import laptop from "../laptop-with-rocket/pngimg.com - laptop_PNG101836.png";
import Image from "next/image";

const Model = () => {
    return (
        <div>
            <Image src={laptop} width="400" style={{ margin: "auto" }} />
        </div>
    );
};

export default Model;
