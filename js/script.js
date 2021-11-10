// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
const display = document.querySelector('.display')

const numeri = [];

for(let i = 0; i < 5; i ++){
     let numero = RandomNum()
    numeri.push(numero)
};

numeri.forEach((element) => {
    display.innerHTML += `${element} `
})








// funzioni
function RandomNum() {
     return Math.floor( Math.random()* 99 )+1;
}