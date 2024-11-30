import React from 'react'
import style from './Download.module.css'
import Button from '../Items/Button'

const Download = () => {
    return (
        <div className={style.Conteiner}>

            <div className={style.Download}>
                <h1 className={style.h1}>Download Unity Pro Today</h1>
                <p className={style.p}>Start creating games that compete with and surpass
                    the quality and success of big studio releases with help from powerful
                    tools, support, verified partners, and a vibrant community.</p>
                    <Button item={"GET STARTED"} ></Button>
            </div>
        </div>
    )
}

export default Download