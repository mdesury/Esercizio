// Import stylesheets
import './style.css';

const archivio = [
  {titolo: "Harry Potter", autore: "JK Rowling"},
  {titolo: "Percy Jackson", autore: "Rick Riordan"},
  {titolo: "Il Signore degli Anelli", autore: "JK Tolkien"}]

const stringa = "percy";
let corrispondenze = 0;
let autore = ""

archivio.forEach(function(libro) {
if (libro.titolo.toLowerCase().includes(stringa)) {
  corrispondenze ++;
  autore = libro.autore;
  console.log("Numero di corrispondenze: ", corrispondenze)
}
})

if (corrispondenze === 1) {
  console.log("Il libro è stato scritto da ", autore)
} else {
  console.log("non sono state trovate corrispondenze")
}







