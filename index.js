// Import stylesheets
import './style.css';

const archivio = [
  {titolo: "Harry Potter", autore: "JK Rowling"},
  {titolo: "Percy Jackson", autore: "Rick Riordan"},
  {titolo: "Il Signore degli Anelli", autore: "JRR Tolkien"}]

const stringa = "Percy";
const corrispondenze = 0;

archivio.forEach(function(libro) {
if (libro.titolo.toLowerCase().includes(stringa)) {
console.log("Il libro è stato scritto da ", libro.autore)
}
})







