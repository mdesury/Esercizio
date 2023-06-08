// Import stylesheets
import './style.css';

const libri = [
  { autore: "Rick Riordan", titolo: "Percy Jackson" },
  { autore: "JR Tolkien", titolo: "Il signore degli anelli" },
  { autore: "JK Rowling", titolo: "Harry Potter e la pietra filosofale" }
];

const stringa = "";
libriCorrispondenti = libri.filter(function(libro) {
  return libro.titolo.toLowerCase().includes(stringa);
})

libri.forEach(function(libro)) {
  if (libro.titolo.toLowerCase().includes(stringa.toLowerCase())) {
  console.log("l'autore del libro che cerchi è:", libro.autore);
  }
  });
  








