import React from 'react'

export function CardMode() {
    return (
        <form>
            <input type="radio" name='card-mode' id="cars"/>
            <label htmlFor="cars">Cars</label>
            <input type="radio" name='card-mode' id="fruits"/>
            <label htmlFor="fruits">Fruits</label>
            <input type="radio" name='card-mode' id="colors"/>
            <label htmlFor="colors">Colors</label>
        </form>
    )
}