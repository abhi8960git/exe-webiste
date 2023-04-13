import React, { useEffect } from "react";
import css from "./ourTeam.module.css";
import Card from "@/components/MemberCard/Card";
import Slide from "@/components/MemberCard/Slide";


const OurTeam = (props) => {

    useEffect(
        ()=>{


        }
    ,[])

    console.log(members);
    const final = props.data.filter((item) => item.year == 4);
    const third = props.data.filter((item) => item.year == 3);
    const second = props.data.filter((item) => item.year == 2);
    const first = props.data.filter((item) => item.year == 1);

    return (
        <div>
            <h1 className={css.head}>Our Team</h1>
            <h1 className={css.FyHead}>Final Year</h1>
            <Card year={final} />
            <h1 className={css.FyHead}>Third Year</h1>\
            <Slide>
                <Card year={third} />
            </Slide>
            <h1 className={css.FyHead}>Second Year</h1>
            <Slide>
                <Card year={second} />
            </Slide>
            <h1 className={css.FyHead}>First Year</h1>
            <Slide>
                <Card year={first} />
            </Slide>
            
            <div className={css.navSolver}></div>

        </div>
    );
};

export async function getStaticProps(context) {
    const response = await fetch(`${process.env.exe}/api/Member`);
    const data = await response.json();
    return {
        props: {
            data,
        },
    };
}

export default OurTeam;
