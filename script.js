let players = []
let url = "players.json";

window.addEventListener('DOMContentLoaded', async () => {
    players = JSON.parse(localStorage.getItem("players"));

    if (!players) 
    {
        await CallAPI();
    }
    bringCards();
})


async function CallAPI() {
    let response = await fetch(url);
    let data = await response.json();
    localStorage.setItem("players", JSON.stringify(data.players));

}

// CallAPI();
// console.log(players);


let container = document.getElementById("container");
function bringCards() {
    container.innerHTML = "";
    players.forEach(player => {
        if (player.position != "GK") {
            container.innerHTML += `
                        <div class="col-md-4  ">
                            <div placement="${player.position}" class="row playerPersonalCard d-flex justify-content-center align-items-center text-light text-decoration-none">
                                <div class="player-card">
                                    <div class="player-header">
                                        <div class="d-flex align-items-center ">
                                            <div>
                                                <div class=" rating d-flex  align-items-center text-center">
                                                    <strong>${player.rating}</br>${player.position}</strong>
                                                </div>
                                            </div>
                                            <div>
                                                <img class="player-face" src=" ${player.photo}" alt="player pic">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="name">
                                        <p class="  name d-flex  align-items-center justify-content-center">${player.name}</p>
                                    </div>

                                    <div class="stats d-flex gap-1">
                                        <div>
                                            <p><strong>PAC</strong></br>${player.pace}</p>
                                        </div>
                                        <div>
                                            <p><strong>SHO</strong></br>${player.shooting}</p>
                                        </div>
                                        <div>
                                            <p><strong>PAS</strong></br>${player.passing}</p>
                                        </div>
                                        <div>
                                            <p><strong>DRI</strong></br>${player.dribbling}</p>
                                        </div>
                                        <div>
                                            <p><strong>DEF</strong></br>${player.defending}</p>
                                        </div>
                                        <div>
                                            <p><strong>PHY</strong></br>${player.physical}</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center g-2">
                                        <img class="flags" src="${player.flag}" alt="flag" />
                                        <img class="flags" src="${player.logo}" alt="flag" />
                                    </div>
                                </div>
                            </div>
                        </div>
            `}

        else {
            {
                container.innerHTML += `
                    
                    <div class="col-md-4  ">
                        <div placement="${player.position} class="row playerPersonalCard d-flex justify-content-center align-items-center text-light text-decoration-none">
                            <div class="player-card">
                                <div class="player-header">
                                    <div class="d-flex align-items-center ">
                                        <div>
                                            <div class=" rating d-flex  align-items-center text-center">
                                                <strong>${player.rating}</br>${player.position}</strong>
                                            </div>
                                        </div>
                                        <div>
                                            <img class="player-face" src=" ${player.photo}" alt="player pic">
                                        </div>
                                    </div>
                                </div>
                                <div class="name">
                                    <p class="  name d-flex  align-items-center justify-content-center">${player.name}</p>
                                </div>

                                <div class="stats d-flex gap-1">
                                    <div>
                                        <p><strong>DIV</strong></br>${player.diving}</p>
                                    </div>
                                    <div>
                                        <p><strong>HAN</strong></br>${player.handling}</p>
                                    </div>
                                    <div>
                                        <p><strong>KIC</strong></br>${player.kicking}</p>
                                    </div>
                                    <div>
                                        <p><strong>REF</strong></br>${player.reflexes}</p>
                                    </div>
                                    <div>
                                        <p><strong>SPE</strong></br>${player.speed}</p>
                                    </div>
                                    <div>
                                        <p><strong>POS</strong></br>${player.positioning}</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center g-2">
                                    <img class="flags" src="${player.flag}" alt="flag" />
                                    <img class="flags" src="${player.logo}" alt="flag" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    `}

        }
    });


}
document.getElementById("btn-submit").addEventListener("click", function () {
    document.getElementById("erreur").innerHTML = "";
    console.log(players)

    if (!validation()) {
        return;
    }
    let newPlayer = {
        name: document.getElementById("Iname").value,
        photo: document.getElementById("Iphoto").value,
        position: playerPos,
        nationality: document.getElementById("Inationality").value,
        flag: document.getElementById("Iflag").value,
        club: document.getElementById("Iclub").value,
        logo: document.getElementById("Ilogo").value,
        rating: document.getElementById("Irating").value,
        pace: document.getElementById("Ipace").value,
        shooting: document.getElementById("Ishooting").value,
        passing: document.getElementById("Ipassing").value,
        dribbling: document.getElementById("Idribbling").value,
        defending: document.getElementById("Idefending").value,
        physical: document.getElementById("Iphysical").value
    }


    players.push(newPlayer)

    bringCards();

})


// form affichage
function showForm() {
    document.getElementById("ajout").style.display = "block";
}
// position changement
document.getElementById("4-3-3").style.display = "none";


function changePosition() {
    if (document.getElementById("4-4-2").style.display === "none") {
        document.getElementById("4-4-2").style.display = "block";
        document.getElementById("4-3-3").style.display = "none";


    }
    else {
        document.getElementById("4-4-2").style.display = "none";
        document.getElementById("4-3-3").style.display = "block";
    }
}

let selectedValue = "";
// goal keeper conditions
const GKselect = document.getElementById("GKselect");
GKselect.addEventListener('change', function (e) {
    selectedValue = e.target.value;
    // console.log(selectedValue);
    if (selectedValue == 1) {
        // document.getElementById("positionSelect").style.display = "none";

        document.getElementById("Lpace").textContent = "diving";
        // document.getElementById("Lpace").setAttribute("id", "Ldiving");
        // document.getElementById("Ipace").setAttribute("id", "Idiving");

        document.getElementById("Lshooting").textContent = "handling";
        // document.getElementById("Lshooting").setAttribute("id", "Lhandling");
        // document.getElementById("Ishooting").setAttribute("id", "Ihandling");

        document.getElementById("Lpassing").textContent = "kicking";
        // document.getElementById("Lpassing").setAttribute("id", "Lkicking");
        // document.getElementById("Ipassing").setAttribute("id", "Ikicking");

        document.getElementById("Ldribbling").textContent = "reflexes";
        // document.getElementById("Ldribbling").setAttribute("id", "Lreflexes");
        // document.getElementById("Idribbling").setAttribute("id", "Ireflexes");

        document.getElementById("Ldefending").textContent = "speed";
        // document.getElementById("Ldefending").setAttribute("id", "Lspeed");
        // document.getElementById("Idefending").setAttribute("id", "Ispeed");

        document.getElementById("Lphysical").textContent = "positioning";
        // document.getElementById("Lphysical").setAttribute("id", "Lpositioning");
        // document.getElementById("Iphysical").setAttribute("id", "Ipositioning");


    }

});

let playerPos;
const pos = document.getElementById("positionSelect");
pos.addEventListener('change', function (e) {
    playerPos = e.target.value;
});

// validate and add




const name = document.getElementById("Iname");
const photo = document.getElementById("Iphoto");
const nationality = document.getElementById("Inationality");
const flag = document.getElementById("Iflag");
const club = document.getElementById("Iclub");
const logo = document.getElementById("Ilogo");
const rating = document.getElementById("Irating");
const pace = document.getElementById("Ipace");
const shooting = document.getElementById("Ishooting");
const passing = document.getElementById("Ipassing");
const dribbling = document.getElementById("Idribbling");
const defending = document.getElementById("Idefending");
const physical = document.getElementById("Iphysical");

const nameRegex = /^[A-Za-z]+/;
const flagsRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)+\.(jpg|jpeg|png|gif|bmp|webp|tiff|svg)$/;
const positionRegex = /^[A-Z]{2}$/;
const statsRegex = /^[0-9]{2,3}$/;

function validation() {

    if (!name.value.trim().match(nameRegex)) {
        document.getElementById("erreur").innerHTML = "name not valide";
        return false;
    }
    else if (!nationality.value.trim().match(nameRegex)) {
        document.getElementById("erreur").innerHTML = "nationality not valide";
        return false;
    }
    else if (!club.value.trim().match(nameRegex)) {
        document.getElementById("erreur").innerHTML = "club not valide";
        return false;
    }
    else if (!photo.value.trim().match(flagsRegex)) {
        document.getElementById("erreur").innerHTML = "photo not valide";
        return false;
    }
    else if (!flag.value.trim().match(flagsRegex)) {
        document.getElementById("erreur").innerHTML = "flag not valide";
        return false;
    }
    else if (!logo.value.trim().match(flagsRegex)) {
        document.getElementById("erreur").innerHTML = "logo not valide";
        return false;
    }
    // else if (!playerPos.match(positionRegex)) {
    //     document.getElementById("erreur").innerHTML = "position not valide";
    //     return false;
    // }
    else if (!rating.value.trim().match(statsRegex)) {
        document.getElementById("erreur").innerHTML = "rating not valide";
        return false;
    }
    else if (!pace.value.trim().match(statsRegex)) {
        document.getElementById("erreur").innerHTML = "stats not valide";
        return false;
    }
    else if (!shooting.value.trim().match(statsRegex)) {
        document.getElementById("erreur").innerHTML = "stats not valide";
        return false;
    }
    else if (!passing.value.trim().match(statsRegex)) {
        document.getElementById("erreur").innerHTML = "stats not valide";
        return false;
    }
    else if (!dribbling.value.trim().match(statsRegex)) {
        document.getElementById("erreur").innerHTML = "stats not valide";
        return false;
    }
    else if (!defending.value.trim().match(statsRegex)) {
        document.getElementById("erreur").innerHTML = "stats not valide";
        return false;
    }
    else if (!physical.value.trim().match(statsRegex)) {
        document.getElementById("erreur").innerHTML = "stats not valide";
        return false;
    }
    else {
        return true;
    }


}






// positionnement du joueuers dans le terrain 
function fullingCard(){
    console.log("erreur");
    
}
let cardTarget="";
let cardPlayerTarget="";
const cards = document.getElementById("4-4-2");
const Pcards = document.getElementById("container");
// console.log(cards);
cards.addEventListener("click" , function(e){
    cardTarget=e.target.closest(".position");
    cardTarget.classList.add("drop_shadow_effect"); 
    console.log(cardTarget.getAttribute("id"));
    
});
Pcards.addEventListener("click" , function(e){
    cardPlayerTarget=e.target.closest(".playerPersonalCard");
    console.log(cardPlayerTarget.getAttribute("placement"));
    
    
    
    if(cardTarget!="" ){

        if(cardTarget.getAttribute("id").includes(cardPlayerTarget.getAttribute("placement"))){
        
            cardTarget.innerHTML=cardPlayerTarget.innerHTML;
            cardPlayerTarget.innerHTML="";
            cardTarget.classList.remove("drop_shadow_effect"); 
            cardTarget.classList.remove("position");

        }
    }
    

     

});






