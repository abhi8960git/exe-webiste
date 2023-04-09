import React from 'react';
import { MemberCard } from '../../components/index';
import css from "./ourTeam.module.css";
const OurTeam = () => {
  return (
    <div>
   <h1 className={css.head}>Our Team</h1>


   <h1 className={css.FyHead}>
          
          Final Year
        </h1>
      

      <div className={css.finalYear}>

       

        <MemberCard></MemberCard>
        
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>
        <MemberCard></MemberCard>


      </div>

    </div>
  )
}

export default OurTeam;