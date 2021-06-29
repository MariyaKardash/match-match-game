import { WelcomeInput } from "../../components/WelcomeInput"
import { Difficulty } from "../../components/Difficulty"
import { CardMode } from "../../components/CardMode"

export function WelcomePage() {
    return(
        <div className="welcome-container">
            <h1>Welcome to Match-Match Game</h1>
            <WelcomeInput/>
            <p>Difficulty: </p>
            <Difficulty/> 
            <p>Select card shift: </p>
            <CardMode/>
            <div className='game-rules'>
                <h3>Rules</h3>
                <p>Rules will be here</p>
            </div>
        </div>
    )
}