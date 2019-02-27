import React from 'react';
import ReactDOM from 'react-dom';

import Triangolo from './components/Triangolo';
import Figlio from './components/Figlio';
import FiglioDue from './components/Figlio2';

let parolaPadre ="parola";

const Array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5"   
]

const App = () => {
    return (
        <div>
            <h1>Esercizi</h1>            
            <Triangolo lato1="20" lato2="10" lato3="30" />
            <h2>Secondo Esercizio</h2>
            <p>Data una parola dal padre, il figlio deve essere in grado di restituirla al padre, prima di essere stampata a video.</p>
            <Figlio parola={parolaPadre}>
                Qui la parola restituita: 
            </Figlio>  
            <h2>Terzo Esercizio</h2>
            <p>Dato un array come const nel padre, il figlio deve elaborarlo e restituirmi il quinto elemento da stampare a video.</p>
            <FiglioDue array={Array}>
                Qui l'array restituito: 
            </FiglioDue>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);