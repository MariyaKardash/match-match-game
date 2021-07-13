import React from 'react'
import { 
    HeaderWrapper,
    Img,
    H1,
} from '../styled'

export function Header() {
    return (
        <HeaderWrapper className="header-wrapper">
            <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Circle-icons-gamecontroller.svg/1024px-Circle-icons-gamecontroller.svg.png' alt="logo"/>
            {/* <H1>Match-Match Game</H1> */}
            <i className="far fa-user" style={{color: 'white', fontSize: '50px'}}></i>
        </HeaderWrapper>
    )
}