const article = document.querySelector("article");
let i = 0;

do {
  i++
  let sentence = `The number is ${i}`;
  article.innerHTML += `<p>${sentence}</p>`;
  
  console.log(sentence);
} 
  while (i < 5);



/* 
Erstelle einen Loop mit do...while.
Es sollen die Nummern von 1 bis 5 im Dokument ausgeben werden.
 */

/* ===== OR ===== 
/* let i = 0
do {
    document.write("The number is" + i + "<br>")
    i++;
}
    while (i < 5); */
