/*
// numero di kilometri 
// età del passeggero

// prezzo 0.21 euro al km 
// sconto 20% minorenni 
// sconto 40% over 65 

// verificare età

// raccolta dati

const TravelKm = Number(prompt('How many km have to travel?'));

const Age = Number(prompt('How old are you?'));

// stampa dati 

console.log('km')
console.log(typeof TravelKm);
console.log(TravelKm);
console.log('age')
console.log(typeof Age);
console.log(Age);


// calcolo prezzo

let price = 0.21, result; // prezzo standard 

// se minore di 18 anni = sconto 20% su prezzo standard 

// se maggiore di 65 anni = sconto 40% su prezzo standard 

if(Age < 18){
    //sconto 20%
    discount = ((TravelKm * price) * 0.2);
    result = ((TravelKm * price) - discount);

    
} else {
    //standard price
    result = TravelKm * price;
}

if(Age > 65){
  // sconto 40%
  discount = ((TravelKm * price) * 0.4);
  result = ((TravelKm * price) - discount);

}

console.log('il prezzo del tuo biglietto: ' + result.toFixed(2)); 

// se sono 17 km * 0,21 = 3.57 + sconto 

*/

// numero di kilometri età passeggero

const TravelKm = document.getElementById('km');

const age = document.getElementById('age');

// stampa dati

console.log('km')

console.log('age')

// calcolo prezzo 

