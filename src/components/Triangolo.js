import React from 'react';

const Triangolo = (props) => {

    let lato1 = props.lato1
    let lato2 = props.lato2
    let lato3 = props.lato3

    function calcoloTirangolo() {
        if (lato1 === lato2 && lato2 === lato3) {
            return "Equilatero";
        } else if (lato1 === lato2 || lato2 === lato3 || lato1 === lato3 ) {
            return "Isoscele";
        } else {
            return "Scaleno";
        }
    }

    return(
        <div>
            <h2>Primo Eservizio</h2>
            <p>Vi chiedo di creare, usando create-react-app, un piccolo software che, date tre valori numerici, mi restituisca che tipo di triangolo sia (isoscele, scaleno, ecc...).</p>
            <ul>
                <li>Lato Uno: {lato1}</li>
                <li>Lato Due: {lato2}</li>
                <li>Lato Tre: {lato3}</li>
            </ul>
            <h3>La soluzione è: Triangolo {calcoloTirangolo()}</h3>
        </div>
    )
}

export default Triangolo;