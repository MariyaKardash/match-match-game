import { CardDiv } from '../styled'

export function Card({ card }) {
    return (
        <CardDiv>{card.flipped ? card.value : '#'}</CardDiv>
    )
}