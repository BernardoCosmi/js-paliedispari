/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//ANCHOR Funzione parole palindorme
function palindromo(parola){
    for(let i=0; i <= parola.length / 2; i++){
        if(parola[i] !== parola[parola.length - 1 - i]){
            return false;
        }
    }
    return true;
}

//ANCHOR Inserimento dati e richiamo funzione
let parolaInserita = prompt("Inserire la parola da verificare: ")
console.log(parolaInserita)
if (palindromo(parolaInserita)){
    console.log("la parola " + parolaInserita + " risulta palindroma")
}else {
    console.log("la parola "  + parolaInserita +  " non risulta palindroma")
}



















/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/