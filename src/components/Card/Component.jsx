import ReactCardFlip from 'react-card-flip';
import { CardDiv } from '../styled'

export function Card({ card }) {
    return ( 
        <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
            <CardDiv>
                #
            </CardDiv>

            <CardDiv>
                {card.value}
            </CardDiv>
      </ReactCardFlip>
    )
}