import React from 'react'
import {styles} from './style'

export function WelcomeInput(props) {
    return (
        <form style={styles.formCompoment}>
            <input type='text' name='first-name' placeholder='First name' style={styles.inputComponent}></input>
            <input type='text' name='second-name' placeholder='Second name' style={styles.inputComponent}></input>
            <input type='email' name='email' placeholder='Email' style={styles.inputComponent}></input>
        </form>
    )
}