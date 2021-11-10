// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:

const display = document.querySelector('.display')
// CreazioneArray vuoto

const numeri = [];

// Generazione numeri random e inserimento nell'Array
for(let i = 0; i < 5; i ++){
     let numero = RandomNum()
    numeri.push(numero)
};

// Display dell'array
numeri.forEach((element) => {
    display.innerHTML += `${element} `
})
const numerigiocatore = [];

// Timer del display con richiesta numeri giocatore
setTimeout(timergame, 2000)



// Selezione numeri indovinati

const numeriIndovinati = [];

numerigiocatore.forEach((element) => {
    if (numeri.includes(element)) {
        numeriIndovinati.push(element)
    }
});


console.log(numeri, numerigiocatore, numeriIndovinati);

// funzioni
function RandomNum() {
     return Math.floor( Math.random()* 99 )+1;
}

function timergame(){
    display.innerHTML = ''
    for(let i = 0; i < numeri.length; i++){
        let risposta = parseInt(prompt('Inserisci un numero'))
        numerigiocatore.push(risposta)
    }
}