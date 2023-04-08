import React from 'react';
import { MemberCard } from '../../components/index';
import css from "./ourTeam.module.css";
const OurTeam = () => {
  return (
    <div>
   <h1 className={css.head}>Our Team</h1>
        <MemberCard></MemberCard>
    </div>
  )
}

export default OurTeam;