let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];


const inputNumber = document.getElementById("inputNumber");
const btnNumber = document.getElementById("btnNumber");
const inputWords = document.getElementById("inputWords");
const btnWords = document.getElementById("btnWords");
/* const wordOutput = document.getElementById("wordOutput"); */


btnWords.addEventListener ('click', (event) => {
  event.preventDefault();

  words.push(inputWords.value);
  console.log(words);
})


btnNumber.addEventListener('click', (event) => {
  event.preventDefault();

  let userInput = Number(inputNumber.value);
  words.map((item) => {
      if(userInput === item.length) {   
      document.write(`<p> ${item} </p>`);
  // mit === wordOutput.innerHTML === mit '=' wird nur das neue wort ins HTMl geschrieben // mit '+=' alle, aber bei neue eingabe bleibt die alte liste im HTML, die neue wird dahinter pasted..
      }
  })
})



/* 
Im Kommentarbereich ist ein Array mit Wörtern.
Dein Ziel ist es, nur die Wörter ins HTML zu schreiben, bei denen die Länge des Wortes mit der Zahl des Inputfeld übereinstimmt.

Verwende ein Loop oder eine Arraymethode.

Bonus: Erstelle ein weiteres Input-Feld, in dem der User neue Wörter zu dieser Sammlung hinzufügen kann. (Die hinzugefügten Wörter sind leider nur bis zum refresh des Browsers vorhanden) */