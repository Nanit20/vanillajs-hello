/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
let action = ["se comió", "orinó", "perdió", "rompió"];
let what = ["mis deberes", "las llaves", "el coche"];
let when = ["antes de llegar a clase", "justo a tiempo", "mientras comía"];
function dameExcusa() {
  let frase =
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 3)] +
    " " +
    when[Math.floor(Math.random() * 3)];
  return frase;
}
window.onload = function() {
  //write your code here
  document.getElementById("excusa").innerHTML = dameExcusa();

  console.log("Hello Rigo from the console!");
};
