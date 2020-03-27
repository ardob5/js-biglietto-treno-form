// Variabili
var euroPerKM = 0.21;
var scontoUnder18 = 0.8;
var scontoOver65 = 0.6;

var nameUser = document.getElementById('name');
var kmUser = document.getElementById('km');
var ageUser = document.getElementById('age');

document.getElementById('generator').addEventListener("click",
  function() {
    var nameChanged = nameUser.value;
    var ageChanged = ageUser.value;
    var kmChanged = kmUser.value;

    var scontoBiglietto;
    var ticketType;
    // Calcolo costo Biglietto
    var costoBiglietto = kmChanged * euroPerKM;
    // Calcolo biglietti con eventuali sconti
    if (ageChanged === "minorenni") {
      scontoBiglietto = costoBiglietto * scontoUnder18;
      ticketType = "Sconto Minorenni";
    } else if (ageChanged === "over65") {
      scontoBiglietto = costoBiglietto * scontoOver65;
      ticketType = "Sconto Over65";
    } else {
      scontoBiglietto = costoBiglietto;
      ticketType = "Biglietto Standard";
    }
    
    // Stampa del risultato
    document.getElementById('output-name-user').innerHTML = nameChanged;
    document.getElementById('output-offer').innerHTML = ticketType;
    document.getElementById('output-place').innerHTML = Math.floor((Math.random() * 9) + 1);
    document.getElementById('output-code').innerHTML = Math.floor((Math.random() * 99999) + 1);
    document.getElementById('output-price').innerHTML = scontoBiglietto.toFixed(2);
  }
);
