import React from 'react';

class Figlio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parola: props.parola
        }
    }

    reverseString = (str) => {
        //creo array
        let splitString = str.split("");
        //inverto array
        let reverseArray = splitString.reverse();
        //riunisco array in parola
        let joinArray = reverseArray.join("");
        //valore di ritorno
        return joinArray;
    }

    render() {

        return(
            <div>
                <h3>La soluzione è: {this.reverseString(this.state.parola)}</h3>
            </div>
        )
    }
}

export default Figlio;