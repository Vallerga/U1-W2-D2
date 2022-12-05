/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*- BOOLEAN è la tipologia più basilare, può avere valore true o false
  - NUMBER, come suggerisce il nome, può contenere numeri. Ha una dimensione di memoria di 64 bit e quindi può contenere da -2^1024 fino a 2^1024.
  - BIGINT supera i limiti di NUMBER permettendo di gestire numeri di dimensioni oltre i limiti consentiti
  - STRING è una tipologia che consiste in una raccolta di caratteri a cui si associano operazioni diverse rispetto alle operazioni matematiche. Per esempio è possibile concatenare due stringhe
  - UNDEFiNED è il valore che si associa ad una variabile appena creata e che non contiene niente, in realtà può anche essere assegnato ma sarebbe meglio usare NULL in quel caso
  - NULL come UNDEFINED significa uno spazio di memoria vuoto, ma ciò che lo differenzia è che deve essere assegnato e non origina nativamente. Utile per svuotare una variabile e resettarla a valore originario per esempio.*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = 'Antonio';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let result =12+20;
console.log(result);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = 'Vallerga';
console.log(name);

const surname = 'stefano';

// se metto questa riga si blocca surname = 'epicode' 

console.log(surname);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4 - x;

console.log(y);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);

//extra
console.log(name1 === name2.toLocaleLowerCase());