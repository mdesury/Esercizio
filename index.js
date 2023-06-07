// Import stylesheets
import './style.css';

let titolo = "Percy Jackson";
let autore = "Rick Riordan";
let stringa = window.prompt("Inserisci una parola:");

let risultato = (titolo.toLowerCase() + autore.toLowerCase()).includes(stringa);
console.log(risultato)

