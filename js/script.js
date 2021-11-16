// Palidroma Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

const wordUser = prompt("Inserisci una parola");
console.log(palindrome(wordUser));

function palindrome(wordUser) { 
    let wordLeng = wordUser.length;

    for (let i = 0; i < wordLeng/2 ; i++) {
        if (wordUser[i] != wordUser[wordLeng -(i + 1)]) {
            return false;
        }
        console.log(wordUser[i] + " è uguale? " + wordUser[wordLeng -(i + 1)]);
    }
    return true;
}

// a -3 -1
// a = -4
// a -(3+1)


// Pari e Dispari 
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.