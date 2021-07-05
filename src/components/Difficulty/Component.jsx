import React from 'react'
import { Select } from '../styled'

export function Difficulty(props) {
    return (
        <form>
            <Select>
                <option value="Easy">Easy(4x4)</option>
                <option value="Easy">Medium(6x6)</option>
                <option value="Easy">Hard(8x8)</option>
            </Select>
        </form>
    )
}