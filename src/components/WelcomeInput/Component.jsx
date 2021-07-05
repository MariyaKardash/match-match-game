import React from 'react'
import { 
    Input,
    Form
} from '../styled'

export function WelcomeInput() {
    return (
        <Form>
            <Input type='text' placeholder='First name' required></Input>
            <Input type='text' placeholder='Second name' required></Input>
            <Input type='email' placeholder='Email' required></Input>
        </Form>
    )
}