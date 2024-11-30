import React from 'react'
import style from './Sucsess.module.css'
import SucsessItem from './SucsessItem'

const Sucsess = () => {
    const First = {
        heading: "20+",
        p: "platforms run Unity creations"
    
      }
    
      const Second = {
        heading: "50%",
        p: "of games are powered by Unity (average PC/console/mobile)"
      }
    
      const Third = {
        heading: "53%",
        p: "of the 1,000 top-grossing mobile games globally are made with Unity"
      }

    return (
        <div className={style.Sucsess}>
            <h1 className={style.h1}> Find success </h1>
            <div className={style.Items}>
                <SucsessItem heading={First.heading} p={First.p}></SucsessItem>
                <SucsessItem heading={Second.heading} p={Second.p}></SucsessItem>
                <SucsessItem heading={Third.heading} p={Third.p}></SucsessItem>
            </div>
        </div>
    )
}

export default Sucsess
