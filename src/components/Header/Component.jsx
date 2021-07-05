import React from 'react'
import { 
    HeaderWrapper,
    Img,
    H1,
} from '../styled'

export function Header() {
    return (
        <HeaderWrapper className="header-wrapper">
            <Img src='https://resources.mynewsdesk.com/image/upload/t_open_graph_image/so9jspr4lyccq8lrwq4r.jpg' alt="logo"/>
            <H1>Match-Match Game</H1>
            <i className="far fa-user" style={{color: 'white', fontSize: '50px'}}></i>
        </HeaderWrapper>
    )
}