
// input BOTTONI
const mainBtn = document.getElementById("main-btn");
console.log("Tipologia:", typeof mainBtn);

mainBtn.addEventListener("click", function () {
    // input NOME E COGNOME
    const inputEl = document.getElementById("complete-nocg");
    console.log(inputEl);
    console.log("Nome inserito:", inputEl.value);
    console.log("Tipologia:", typeof inputEl);

    //stampa HTML -->NOME E COGNOME
    const printName = document.getElementById("printname");
    printName.innerHTML = inputEl.value;




    // input KILOMETRAGGIO

    const KmTreno = parseInt(document.getElementById("trip-km").value);
    const prezzo = KmTreno * 0.21;
    console.log("km Inseriti:", KmTreno);

    // input PREZZO NON SCONTATO

    console.log("prezzo:", prezzo);
    console.log("Tipologia:", typeof KmTreno);


    // input ETA'

    const sconto = document.getElementById("range").value;

    console.log("sconto:", sconto, "%");
    console.log("Tipologia:", typeof sconto);



    if (sconto != 20 && sconto != 40) {
        console.log("L'utente ha un'età compresa tra i 18 e i 65 e NON ha diritto agli sconti.");


        //stampa HTML -->PREZZO NON SCONTATO

        const finalPrice = document.getElementById("printprice");
        finalPrice.innerHTML = `€ ${prezzo.toFixed(2)}`;

        //stampa HTML -->OFFERTA

        const temporaryPrice = document.getElementById("printoffer");
        temporaryPrice.innerHTML = `NO`;
    }

    // sconto per under 18 = 20%

    if (sconto == 20) {
        const prezzoSale = prezzo - ((prezzo * sconto) / 100);
        // prezzo arrotondato per difetto
        const numFloor = Math.floor(prezzoSale);
        console.log("Prezzo finale scontato UNDER 18:", numFloor);

        //stampa HTML -->OFFERTA

        const temporaryPrice = document.getElementById("printoffer");
        temporaryPrice.innerHTML = `SI`;

        //stampa HTML -->PREZZO SCONTATO

        const finalPrice = document.getElementById("printprice");
        finalPrice.innerHTML = `€ ${prezzoSale.toFixed(2)}`;

    }

    // sconto over 65 = 40%
    if (sconto == 40) {
        const prezzoSale = prezzo * 0.6;
        // prezzo arrotondato per eccesso
        const numCeil = Math.ceil(prezzoSale);
        console.log("Prezzo finale scontato OVER 65:", numCeil);

        //stampa HTML -->OFFERTA

        const temporaryPrice = document.getElementById("printoffer");
        temporaryPrice.innerHTML = `SI`;


        //stampa HTML -->PREZZO SCONTATO

        const finalPrice = document.getElementById("printprice");
        finalPrice.innerHTML = `€ ${prezzoSale.toFixed(2)}`;
    }



}
)


