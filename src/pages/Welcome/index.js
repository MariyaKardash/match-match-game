import { WelcomeInput } from "../../components/WelcomeInput"
import { Difficulty } from "../../components/Difficulty"
import { CardMode } from "../../components/CardMode"

export function WelcomePage() {
    return(
        <div class="welcome-container">
            <h1>Welcome page</h1>
            <WelcomeInput/>
            <p>Difficulty: </p>
            <Difficulty/> 
            <p>Select card shift: </p>
            <CardMode/>
            <div class='game-rules'>
                <h3>Rules</h3>
                <p>Rules will be here</p>
            </div>
        </div>
    )
}