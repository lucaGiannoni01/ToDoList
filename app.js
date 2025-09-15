const mesi = [
    {
        id : "0",
        nome : "Gennaio",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
        id : "1",
        nome : "Febbraio",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    },
    {
        id : "2",
        nome : "Marzo",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
        id : "3",
        nome : "Aprile",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
        id : "4",
        nome : "Maggio",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
        id : "5",
        nome : "Giugno",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
        id : "6",
        nome : "Luglio",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
        id : "7",
        nome : "Agosto",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
        id : "8",
        nome : "Settembre",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
        id : "9",
        nome : "Ottobre",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    },
    {
        id : "10",
        nome : "Novembre",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
        id : "11",
        nome : "Dicembre",
        giorni : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    }
]

//Ottengo la data di oggi
const dataOggi = new Date();

//Ottengo il mese e il giorno attuale
const meseOggiNumero = dataOggi.getMonth();
const giornoOggi = dataOggi.getDate();

//Seleziono i due campi <p> tramite ID
const mese = document.querySelector("#mese");
const giorno = document.querySelector("#giorno");


//Riferimento indice del mese mostrato
let indiceMeseMostrato = mesi[meseOggiNumero].id;

//Riferimento indice del giorno mostrato
let giornoMostrato = giornoOggi;

//Mostro nel campo <p> nome del mese
mese.textContent = mesi[indiceMeseMostrato].nome;
function aggiornaMese() {
    mese.textContent = mesi[indiceMeseMostrato].nome;
    giornoMostrato = 1;
    giorno.textContent = giornoMostrato;
    if(indiceMeseMostrato !== meseOggiNumero){
        mese.style.color = "#868686ff";
    } else {
        mese.style.color = "#212121";
    }
}

//Click evento su freccie cambio mese
const mesePrecedente = document.querySelector("#mesePrecedente");
const meseSuccessivo = document.querySelector("#meseSuccessivo");

mesePrecedente.addEventListener("click", function() {
    if(indiceMeseMostrato > 0) {
        indiceMeseMostrato--;
    } else if(indiceMeseMostrato == 0) {
        indiceMeseMostrato = 11;
    }
    aggiornaMese();
    aggiornaGiorno();
})

meseSuccessivo.addEventListener("click", function() {
    if(indiceMeseMostrato < 11) {
        indiceMeseMostrato++;
    } else if(indiceMeseMostrato == 11) {
        indiceMeseMostrato = 0;
    }
    aggiornaMese();
    aggiornaGiorno();
})


//Mostro nel campo <p> nome del giorno
giorno.textContent = giornoOggi;
function aggiornaGiorno() {
    giorno.textContent = giornoMostrato;
    if(giornoMostrato !== giornoOggi){
        giorno.style.color = "#868686ff";
    } else if(giornoMostrato == giornoOggi && indiceMeseMostrato == meseOggiNumero){
        giorno.style.color = "#212121";
    } else{
        giorno.style.color = "#868686ff";
    }
}


//Click evento su freccie cambio giorno
const giornoPrecedente = document.querySelector("#giornoPrecedente");
const giornoSuccessivo = document.querySelector("#giornoSuccessivo");

giornoPrecedente.addEventListener("click", function() {
    if(giornoMostrato > 1) {
        giornoMostrato--;
    } else if(giornoMostrato == 1) {
        giornoMostrato = mesi[indiceMeseMostrato].giorni[mesi[indiceMeseMostrato].giorni.length-1];
    }
    aggiornaGiorno();
})

giornoSuccessivo.addEventListener("click", function() {
    if(giornoMostrato < mesi[indiceMeseMostrato].giorni[mesi[indiceMeseMostrato].giorni.length-1]) {
        giornoMostrato++;
    } else if(giornoMostrato == mesi[indiceMeseMostrato].giorni[mesi[indiceMeseMostrato].giorni.length-1]) {
        giornoMostrato = 1;
    }
    aggiornaGiorno();
})

const aggiungiNota = document.querySelector("#aggiungiNota");
const containerCard = document.querySelector("#containerCard");

function creaCard() {
  const cardNuova = document.createElement("div");
  cardNuova.classList.add("card");
  cardNuova.innerHTML = `
    <div class="headerCard">
      <h2>Titolo</h2>
      <img src="/images/more_horiz.svg" alt="menu" class="bottoneMenu">
      <div class="menuList">
        <ul>
          <li><img src="/images/delete.svg" alt="elimina"></li>
          <li><img src="/images/edit.svg" alt="modifica"></li>
          <li><img src="/images/select_check.svg" alt="svolta"></li>
        </ul>
      </div>
    </div>
    <p>descrizione</p>
  `;
  containerCard.appendChild(cardNuova);
}


aggiungiNota.addEventListener("click", creaCard);

// Event delegation: gestione dei click sui bottoni menu
containerCard.addEventListener("click", (e) => {

  const bottone = e.target.closest(".bottoneMenu");
  if (!bottone) return; 

  const card = bottone.closest(".card");
  const menuList = card.querySelector(".menuList");

  containerCard.querySelectorAll(".menuList.aperto").forEach(m => {
    if (m !== menuList) m.classList.remove("aperto");
  });

  menuList.classList.toggle("aperto");
  e.stopPropagation();
});

// Click fuori da qualsiasi card chiude tutti i menu
document.addEventListener("click", () => {
  containerCard.querySelectorAll(".menuList.aperto").forEach(m => m.classList.remove("aperto"));
});









