// Variabili
var euroPerKM = 0.21;
var discountUnder18 = 0.8;
var discountOver65 = 0.6;

var nameUser = document.getElementById('name');
var kmUser = document.getElementById('km');
var ageUser = document.getElementById('age');
var postEventContainer = document.getElementById('container-post-event');

document.getElementById('clear').addEventListener("click",
  function() {
    nameUser.value = "";
    kmUser.value = "";
    ageUser.value = "";
    postEventContainer.style.display = "none";
  }
)

document.getElementById('generator').addEventListener("click",
  function() {
    var nameChanged = nameUser.value;
    var ageChanged = ageUser.value;
    var kmChanged = kmUser.value;

    var discountTicket;
    var ticketType;
    // Calcolo costo Biglietto
    var ticketPrice = kmChanged * euroPerKM;
    // Calcolo biglietti con eventuali sconti
    if (ageChanged === "minorenni") {
      discountTicket = ticketPrice * discountUnder18;
      ticketType = "Sconto Minorenni";
    } else if (ageChanged === "over65") {
      discountTicket = ticketPrice * discountOver65;
      ticketType = "Sconto Over65";
    } else {
      discountTicket = ticketPrice;
      ticketType = "Biglietto Standard";
    }

    // Stampa del risultato
    postEventContainer.style.display = "block";
    document.getElementById('output-name-user').innerHTML = nameChanged;
    document.getElementById('output-offer').innerHTML = ticketType;
    document.getElementById('output-place').innerHTML = Math.floor((Math.random() * 9) + 1);
    document.getElementById('output-code').innerHTML = Math.floor((Math.random() * 99999) + 1);
    document.getElementById('output-price').innerHTML = discountTicket.toFixed(2);
  }
);
