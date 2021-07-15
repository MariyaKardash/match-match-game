import React from 'react'
import { 
    HeaderWrapper,
    Img,
} from '../styled'

export function Header() {
    return (
        <HeaderWrapper className="header-wrapper">
            <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/1024px-Circle-icons-gamecontroller.svg.png' alt="logo"/>
            <i className="far fa-user" style={{color: 'white', fontSize: '50px'}}></i>
        </HeaderWrapper>
    )
}