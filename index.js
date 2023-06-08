// Import stylesheets
import './style.css';

const libri = [
  { autore: "Mario Rossi", titolo: "Il grande Gatsby" },
  { autore: "Giulia Verdi", titolo: "Il signore degli anelli" },
  { autore: "Mario Rossi", titolo: "Harry Potter e la pietra filosofale" }
];

const sequenzaCaratteri = "grande";

libri.forEach(function(libro) {
  if (libro.titolo.toLowerCase().includes(sequenzaCaratteri)) {
  console.log("Il titolo del libro è", libro.titolo, "scritto da", libro.autore);
  }
});



