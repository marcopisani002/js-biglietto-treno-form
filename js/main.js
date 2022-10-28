
// input BOTTONI
const mainBtn = document.getElementById("main-btn");
console.log("Tipologia:", typeof mainBtn);

mainBtn.addEventListener("click", function () {
    // input NOME E COGNOME
    const inputEl = document.getElementById("complete-nocg");
    console.log( inputEl);
    console.log("Nome inserito:", inputEl.value);
    console.log("Tipologia:", typeof inputEl);

    // input KILOMETRAGGIO

    const KmTreno =  document.getElementById("trip-km");
    const prezzo = KmTreno * 0.21;
    console.log( KmTreno);
    console.log("km Inseriti:",KmTreno.value);
    console.log(prezzo);
    console.log( "prezzo:",prezzo.value);
    console.log("Tipologia:", typeof KmTreno);
   

    // input ETA'

    const age = document.getElementById("range");
    console.log(age);
    console.log("età:",age);
    console.log("Tipologia:", typeof age);




    if (age > 18 && age < 65) {
        console.log("L'utente ha un'età compresa tra i 18 e i 65 e NON ha diritto agli sconti.");
    }

    // sconto per under 18 = 20%

    if (age < 18) {
        const prezzoSale = prezzo * 0.8;
        // prezzo arrotondato per difetto
        const numFloor = Math.floor(prezzoSale);
        console.log("Prezzo finale scontato UNDER 18:", numFloor);
    }

    // sconto over 65 = 40%
    if (age > 65) {
        const prezzoSale = prezzo * 0.6;
        // prezzo arrotondato per eccesso
        const numCeil = Math.ceil(prezzoSale);
        console.log("Prezzo finale scontato OVER 65:", numCeil);
    }

    console.log("hai cliccato qui");
})


