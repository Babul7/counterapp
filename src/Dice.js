import React, { useState } from 'react'
import './style.css'

const Dice = () => {

    const [diceNumber, setDiceNumber] = useState(6)

    const refreshDice = () => {
        const rannum = Math.floor(Math.random() * 6) + 1
        setDiceNumber(rannum)
    }

  return (
    <div>
        <h1>Dice Image</h1>
        <figure>
            <img src={require(`./images/${diceNumber}.png`)} alt="" className='image'/>
        </figure>
        <button onClick={() => refreshDice()} className='button'>Roll</button>
    </div>
  )
}

export default Dice