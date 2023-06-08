// Import stylesheets
import './style.css';

const libri = [
  { autore: "Rick Riordan", titolo: "Percy Jackson" },
  { autore: "JR Tolkien", titolo: "Il signore degli anelli" },
  { autore: "JK Rowling", titolo: "Harry Potter e la pietra filosofale" }
];

const stringa = "Tolkien";

libri.forEach(function(libro) {
  if (libro.titolo.toLowerCase().includes(stringa)) {
  console.log("Il titolo del libro è", libro.titolo, "scritto da", libro.autore);
  }
});




