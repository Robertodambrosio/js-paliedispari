// Palidroma Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// const wordUser = prompt("Inserisci una parola");
// console.log(palindrome(wordUser));

// function palindrome(wordUser) { 
//     let wordLeng = wordUser.length;

//     for (let i = 0; i < wordLeng/2 ; i++) {
//         if (wordUser[i] != wordUser[wordLeng -(i + 1)]) {
//             return false;
//         }
//         console.log(wordUser[i] + " è uguale? " + wordUser[wordLeng -(i + 1)]);
//     }
//     return true;
// }

// a -3 -1
// a = -4
// a -(3+1)


// Pari e Dispari 
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

let sceltaUser = "";
let numeroUser = 0;

do {
sceltaUser = prompt("Pari o dispari?").toLowerCase();
} while (sceltaUser != "pari" && sceltaUser != "dispari"){   
    }

console.log("l'utente ha scelto: " + sceltaUser);
    if (sceltaUser == "pari") {
        console.log("Il pc ha scelto: dispari");
    } else if (sceltaUser == "dispari") {
        console.log("Il pc ha scelto: pari");
    }

do {
numeroUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
  }  while(numeroUser < 1 || numeroUser > 5) {
    }
console.log("l'utente ha scelto " + numeroUser);


let numeroPc = randomPc(1,5);
let sommaNumeri = somma(numeroPc, numeroUser);
console.log("Il pc ha scelto: " + numeroPc);
console.log("la somma dei numeri è: " + sommaNumeri);


if (sceltaUser == "pari" && sommaNumeri % 2 == 0){
    console.log("L'utente vince");
} else if (sceltaUser == "dispari" && sommaNumeri % 2 == 0) {
    console.log("Pc vince");
} else if (sceltaUser == "pari" && sommaNumeri % 2 == 1) {
    console.log("Pc vince");
} else if (sceltaUser == "dispari" && sommaNumeri % 2 == 1) {
    console.log("L'utente vince");
}



function randomPc(num1, num2) {
    let random = Math.floor(Math.random() * (num2 - num1) + 1);
    return random;
}

function somma(ins1, ins2) {
    let sum = ins1 + ins2;
    return sum;
}
