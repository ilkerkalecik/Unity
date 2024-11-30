import React from 'react'
import style from './Footer.module.css'
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.Isım}>

                <h1 className={style.h1}> <span className={style.h3}>Designed by</span> İlker KALECİK</h1>
            </div>


            <div className={style.Links} >
                <p className={style.p}>Benimle İletişime Geçin!</p>
                <div className={style.Icons}>
                    <a className={style.a} href="https://www.linkedin.com/in/ilkerkalecik/">
                        <FaLinkedin />
                    </a>
                    <a className={style.a} href="mailto:ikalecik26313@gmail.com">
                        <IoMail />
                    </a>
                    <a className={style.a} href="https://instagram.com/ilkerkalecik">
                        <FaInstagram />
                    </a>
                </div>



            </div>


        </div>
    )
}

export default Footer