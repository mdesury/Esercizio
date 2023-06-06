// Import stylesheets
import './style.css';

let a = 25;
let b = 27;

if (a == b) {
  document.getElementById("demo").innerHTML = "Sono gemelli";
} else if (a > b) {
  document.getElementById("demo").innerHTML += "Remo è il fratello più grande";
} else if (a < b) {
  document.getElementById("demo").innerHTML += "Nino è il fratello più grande";
}


