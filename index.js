// Import stylesheets
import './style.css';

class Archivio {
  constructor(libri) {
    this.libri = libri;
  }

  cercaLibri(stringa) {
    const libriCorrispondenti = [];

    this.libri.forEach(function(libro) {
      if (libro.titolo.toLowerCase().includes(stringa.toLowerCase())) {
        libriCorrispondenti.push(libro);
      }
    });

    return libriCorrispondenti;
  }
}



const archivio = new Archivio([
  {titolo: "Harry Potter", autore: "JK Rowling", posizione: "N9", prestato: ""},
  {titolo: "Percy Jackson Signore", autore: "Rick Riordan",  posizione: "S17", prestato: ""},
  {titolo: "Il Signore degli Anelli", autore: "JK Tolkien",  posizione: "G7", prestato: ""}
]);

const risultatoRicerca = archivio.cercaLibri("pe");
document.getElementById("demo").innerHTML = JSON.stringify(risultatoRicerca);








