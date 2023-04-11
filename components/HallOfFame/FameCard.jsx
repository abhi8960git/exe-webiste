import React from 'react'

const FameCard = () => {
  return (
   
    <div class={css.bugFinder}>
    <div class={css.avatar}>
        {/* <img class="a_img" src="./assets/boy.png" alt=""> */}
    </div>
    <div class={css.pInfo}>
        <p class={css.name}>Abhishek Kumar</p>
        <p class={css.rollNo}>21BCS116</p>

    </div>

    <div class={css.Socialhandler}>
        <div class={css.bug}>
            <div class={css.line}></div>
            <a href="">
                {/* <img src="./assets/bug.webp" alt=""> */}
            </a>
        </div>
        <div class="bug">
            <a href="">
                <img src="./assets/github.webp" alt="">
            </a>
        </div>
        <div class="bug">
            <a href="">
                <img src="./assets/instagram.webp" alt="">
            </a>
        </div>

    </div>
</div>


  )
}

export default FameCard