import React from 'react'
import style from './Heading.module.css'
import Button from '../Items/Button'
import Banner from '/src/assets/Images/banner.avif'
const Heading = () => {
    const item='download unity pro'
    return (

        <div style={{backgroundImage:`url(${Banner})`}} className={style.Heading}>
            <div className={style.HeadingItems}>
                <h1 className={style.h1}>Get started on Unity Pro today</h1>
                <h3 className={style.h3}>Put our ecosystem of game creation tools,
                    support, and community in your team’s hands.</h3>
            <Button item={item.toUpperCase()}></Button>
            </div>
        </div>
    )
}

export default Heading