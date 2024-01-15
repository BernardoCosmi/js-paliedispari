//NOTE ESERCIZIO PALINDROMA
/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

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

//NOTE ESERCIZIO PARI E DISPARI
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//ANCHOR Random Number Function
function numeroRandom(){
    let randomNumber = Math.floor(Math.random() * 5) + 1;
}

//ANCHOR Even or Odd Function
function pariOdispari(number){
    if(number % 2 === 0 ){
        return true;
    }else{
        return false;
    }
}
//ANCHOR Funziono Somma
function sum(a, b) {
    return a + b;
}

//ANCHOR Inserimento dati e richiamo Funzioni
let sceltaPOD = prompt('Scegli: digita "pari" o "dispari"')
let sceltaNumero = parseInt(prompt("inserisci un numero da 1 a 5"))

if(sceltaNumero>=1 && sceltaNumero<=5){
    let numeroCPU = numeroRandom();
    let somma = sum(sceltaNumero, numeroCPU)
    let risultato = pariOdispari(somma) ? 'pari' : 'dispari';
    if(pariOdispari(somma)){
        risultato = 'pari'
    }else{
        risultato = 'dispari'
    }
    if (risultato === sceltaPOD) {
        console.log(`Hai vinto! La somma è ${risultato}.`);
    } else {
        console.log(`Hai perso! La somma è ${risultato}.`);
    }
}