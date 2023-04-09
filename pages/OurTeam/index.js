import React from "react";
import { MemberCard } from "../../components/index";
import css from "./ourTeam.module.css";

const OurTeam = (props) => {
    const final = props.data.filter((item) => item.year == 4);
    const third = props.data.filter((item) => item.year == 3);
    const second = props.data.filter((item) => item.year == 2);
    const first = props.data.filter((item) => item.year == 1);
    return (
        <div>
            <h1 className={css.head}>Our Team</h1>

            <h1 className={css.FyHead}>Final Year</h1>

            <div className={css.finalYear}>
                {final.map((item) => (
                    <MemberCard
                        key={item.id}
                        image={item.imageURL}
                        name={item.name}
                        tagline={item.tagline}
                        github={item.github}
                        LinkedIn={item.linkedin}
                    />
                ))}
            </div>
            <h1 className={css.FyHead}>Third Year</h1>

            <div className={css.finalYear}>
                {third.map((item) => (
                    <MemberCard
                        key={item.id}
                        image={item.imageURL}
                        name={item.name}
                        tagline={item.tagline}
                        github={item.github}
                        LinkedIn={item.linkedin}
                    />
                ))}
            </div>
            <h1 className={css.FyHead}>Second Year</h1>

            <div className={css.finalYear}>
                {second.map((item) => (
                    <MemberCard
                        key={item.id}
                        image={item.imageURL}
                        name={item.name}
                        tagline={item.tagline}
                        github={item.github}
                        LinkedIn={item.linkedin}
                    />
                ))}
            </div>
            <h1 className={css.FyHead}>First Year</h1>

            <div className={css.finalYear}>
                {first.map((item) => (
                    <MemberCard
                        key={item.id}
                        image={item.imageURL}
                        name={item.name}
                        tagline={item.tagline}
                        github={item.github}
                        LinkedIn={item.linkedin}
                    />
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps(context) {
    console.log(context);
    const response = await fetch("http://localhost:3000/api/Member");
    const data = await response.json();
    return {
        props: {
            data,
        },
    };
}

export default OurTeam;
