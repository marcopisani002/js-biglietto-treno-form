const inputEl = document.querySelector("[name='complete']");

console.log(inputEl);

inputEl.value = "Mario Rossi";

console.log(inputEl.value);
console.log("Tipologia:", typeof inputEl.value);

let Kmtreno = parseInt(document.querySelector("[name='trip']"));
const prezzo = Kmtreno * 0.21;
console.log(Kmtreno);

Kmtreno.value = "10";

console.log(Kmtreno.value);
console.log("Tipologia:", typeof Kmtreno.value);


const age = parseInt(document.querySelector("[name='range']"));
console.log(age);

console.log("Tipologia:", typeof age);



const mainBtn = document.getElementById("main-btn");
console.log("Tipologia:", typeof mainBtn);

mainBtn.addEventListener("click", function () {
    /* if (age > 18 && age < 65) {
         console.log("L'utente ha un'età compresa tra i 18 e i 65 e NON ha diritto agli sconti.");
     }
     
     // sconto per under 18 = 20%
     
     if (age < 18) {
         const prezzoSale = prezzo * 0.8;
         // prezzo arrotondato per difetto
         const numFloor = Math.floor( prezzoSale);
         console.log("Prezzo finale scontato UNDER 18:", numFloor);
     }
     
     // sconto over 65 = 40%
     if (age > 65) {
         const prezzoSale = prezzo * 0.6;
         // prezzo arrotondato per eccesso
         const numCeil = Math.ceil( prezzoSale);
         console.log("Prezzo finale scontato OVER 65:", numCeil);
     }*/
    console.log("hai cliccato qui");
})


/* if (value="over_65"){

    if (age > 65) {
        const prezzoSale = prezzo * 0.6;
        // prezzo arrotondato per eccesso
        const numCeil = Math.ceil( prezzoSale);
        console.log("Prezzo finale scontato OVER 65:", numCeil);
    }

 } */