import React from 'react'
import {Event} from "../index.js";

const EventCards = (props) => {
  // console.log(props);


  return (


    <>
<div>
 
   {
    props.events.map((event)=>(
        <Event 

        key={event.id}
        title={event.title}
        image={event.image}
        detail={event.text}
        
        
        ></Event>
       
    ))
   }


   {/* <h1>{props.events.title}</h1> */}

</div>
    </>
    
  )
}

export default EventCards;