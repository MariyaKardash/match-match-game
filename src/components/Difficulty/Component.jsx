import React from 'react'
import { Select, Wrapper, H3 } from '../styled'

export function Difficulty(props) {
    return (
        <Wrapper>
        <H3>Difficulty</H3>
        <form>
            <Select id='difficultySelect'>
                <option value="Easy">Easy(4x4)</option>
                <option value="Medium">Medium(6x6)</option>
                <option value="Hard">Hard(8x8)</option>
            </Select>
        </form>
        </Wrapper>
    )
}