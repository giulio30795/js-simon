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
setTimeout( reset,
2900)

setTimeout(timergame, 3000)

// funzioni

function reset (){
    display.innerHTML = ''
}

function RandomNum() {
    return Math.floor( Math.random()* 99 )+1;
}

function timergame(){
    const numeriIndovinati = [];

    for(let i = 0; i < numeri.length; i++){
        let risposta;
        do {
            risposta = parseInt(prompt('Inserisci un numero'))
            } while (numerigiocatore.includes(risposta))
        
        numerigiocatore.push(risposta)

        if (numeri.includes(risposta)) {
            numeriIndovinati.push(risposta)
        }
    }

    if (numeriIndovinati.length === 0) {
        display.innerHTML = 'Peccato non hai indovinato nessun numero!'
    } else {
    display.innerHTML = `Hai indovinato ${numeriIndovinati} per un totale di ${numeriIndovinati.length} numeri!`
    }
}