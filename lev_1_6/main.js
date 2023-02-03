const retArray = [];

for (i = 1; i <= 100; i++) { //if 'i = 0;', 1st item will be 'img_0.jpg !
  retArray.push(`img_${i}.jpg`);
  
}

console.log(retArray); //wenn der befehl inside loop - 100 times ausgegeben!


/* Wir wollen ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg sollen ausgeben werden.
Deklariere die Variable retArray als leeres Array.
Schreibe eine for-Schleife.
Nutze den push() Befehl. */