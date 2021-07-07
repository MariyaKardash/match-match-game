import React from 'react'
import { Form } from '../styled'
import { Input } from '../Input'

export function WelcomeInput() {
    return (
        <Form>
            <Input id='firstNameInput' type='text' placeholder='First name'/>
            <Input id='secondNameInput' type='text' placeholder='Second name'/>
            <Input id='emailInput' type='email' placeholder='Email'/>
        </Form>
    )
}