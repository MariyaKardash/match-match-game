import React from 'react'

export function CardMode() {
    return (
        <form>
            <input type="radio" name='card-mode' id="cars"/>
            <label for="cars">Cars</label>
            <input type="radio" name='card-mode' id="fruits"/>
            <label for="fruits">Fruits</label>
            <input type="radio" name='card-mode' id="colors"/>
            <label for="colors">Colors</label>
        </form>
    )
}