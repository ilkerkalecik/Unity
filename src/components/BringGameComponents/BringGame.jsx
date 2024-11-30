import React from 'react'
import style from './BringGame.module.css'

const BringGame = () => {
    return (
        <div className={style.BringGame}>
            <div className={style.Left}>
                <h1 className={style.h1}>
                    Bring your game to life
                </h1>
                <p className={style.p}>
                    Game developers are propelling their creations
                    into the future with the power of interactive, real-time 3D.
                </p>
            </div>
            <div className={style.Right}>
                <iframe className={style.Frame}
                    src="https://www.youtube.com/embed/R91KtPOS_SY"
                    title="Everything you need to create and operate a successful game | Unity"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
             encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default BringGame