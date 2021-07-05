import React from 'react'

import { Difficulty } from '../Difficulty'
import { CardMode } from '../CardMode'
import { Button } from '../styled'

export function GameMode(props) {
    return(
        <div className="game-mode-container">
            <p>Difficulty: </p>
            <Difficulty/> 
            <p>Select card shift: </p>
            <CardMode/>
            <div className='game-rules'>
                <h3>Rules</h3>
                <p>Rules will be here</p>
            </div>
            <Button>Start game</Button>
        </div>
    )
}