import "bootstrap";
import "./style.css";

function excuse() {
  let excuse = "";
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let rWho = Math.floor(Math.random() * who.length);
  let rAction = Math.floor(Math.random() * action.length);
  let rWhat = Math.floor(Math.random() * what.length);
  let rWhen = Math.floor(Math.random() * when.length);
  excuse =
    who[rWho] + " " + action[rAction] + " " + what[rWhat] + " " + when[rWhen];
  return excuse;
}

function insert(text, id) {
  document.getElementById(id).innerHTML = text;
}

window.onload = function() {
  //write your code here
  insert(excuse(), "excuse");
};
