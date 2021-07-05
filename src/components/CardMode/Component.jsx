import React from 'react'

export function CardMode() {
    return (
        <form>
            <div className="form_radio_btn">
                <input id="numbers" type="radio" name="radio" value="numbers" defaultChecked/>
                <label htmlFor="numbers">Numbers</label>
            </div>
            
            <div className="form_radio_btn">
                <input id="cars" type="radio" name="radio" value="cars"/>
                <label htmlFor="cars">Cars</label>
            </div>
            
            <div className="form_radio_btn">
                <input id="flowers" type="radio" name="radio" value="flowers"/>
                <label htmlFor="flowers">Flowers</label>
            </div>
        </form>
    )
}