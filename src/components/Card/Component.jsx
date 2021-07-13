import ReactCardFlip from 'react-card-flip';
import { CardDiv, ImageForCard } from '../styled'

export function Card({ card }) {
    return ( 
        <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
            <CardDiv>
                <ImageForCard src="https://i.pinimg.com/564x/c2/bc/4c/c2bc4c6cdbbd969e92b37105a92216e8.jpg" alt="dino"/>
            </CardDiv>

            <CardDiv>
                {card.value}
            </CardDiv>
      </ReactCardFlip>
    )
}