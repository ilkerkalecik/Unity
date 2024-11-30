import React from 'react'
import style from './BottomHeading.module.css'
import Items from './Items'
import ListItems from './ListItems.jsx'

const BottomHeading = () => {

  const First = {
    heading: "Deploy to game consoles",
    p: "Maximize your player potential by bringing your games to Nintendo Switch™, PlayStation®, and Xbox® platforms. With access to existing and upcoming closed platforms, you’re free to bring your ideas into reality."

  }

  const Second = {
    heading: "Bring order to development chaos",
    p: "Unity Cloud is an ecosystem of products and services that makes work on real-time 3D experiences more creator-focused, accessible, and connected."
  }

  const Third = {
    heading: "Expedite your support",
    p: "Enjoy faster support from our Customer Service team. With Unity by your side, you’ll have the confidence to stretch your potential and spend more time creating."
  }
  const Forth = {
    heading: "Enhance your physics and AR authorin",
    p: "Get specialized tools including Unity Mars for more efficient AR/MR app development, and Havok Physics for Unity, which provides deterministic physics simulations for DOTS projects."
  }
  return (
    <div className={style.BottomHeading} >

      <h1 className={style.h1}>Just a few of the games created <br /> with Unity Pro</h1>

      <Items></Items>
      <h1 className={style.h1}>Why Unity Pro?</h1>
      <p className={style.p}>Unity Pro is more than a game engine.
        Unlock your team’s potential with professional
        tools to create across game devices and platforms.
        With access to closed platforms and priority support
        paired with enhanced physics and AR tools, your team
        can more efficiently prototype, design, and launch.</p>

      <div className={style.List}>
        <ListItems heading={First.heading} p={First.p} ></ListItems>
        <ListItems heading={Second.heading} p={Second.p}></ListItems>
        <ListItems heading={Third.heading} p={Third.p} button={true}></ListItems>
        <ListItems heading={Forth.heading} p={Forth.p}></ListItems>
      </div>
      


    </div>

  )
}

export default BottomHeading