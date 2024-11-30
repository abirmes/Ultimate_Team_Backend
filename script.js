let joueurs =[];
async function CallAPI() {
    let url = "players.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();
    joueurs = json.players;
    localStorage.setItem("players", JSON.stringify(joueurs));

}

CallAPI();
let players = JSON.parse(localStorage.getItem("players"));
console.log(players);


let container = document.getElementById("container");
function bringCards(players) {
    container.innerHTML = "";
    players.forEach(player => {
        if (player.position != "GK") {
            container.innerHTML += `
                        <div class="col-md-4  ">
                            <a href="" class="row  d-flex justify-content-center align-items-center text-light text-decoration-none">
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
                            </a>
                        </div>
            `}

        else {
            {
                container.innerHTML += `
                    
                    <div class="col-md-4  ">
                        <a href="" class="row  d-flex justify-content-center align-items-center text-light text-decoration-none">
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
                        </a>
                    </div>
                    
                    `}

        }
    });

}

bringCards(players);

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


// goal keeper conditions
const GKselect = document.getElementById("GKselect");
GKselect.addEventListener('change', function (e) {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    if (selectedValue == 1) {
        document.getElementById("positionSelect").style.display = "none";

        document.getElementById("Lpace").textContent = "diving";
        document.getElementById("Lpace").setAttribute("id", "Ldiving");
        document.getElementById("Ipace").setAttribute("id", "Idiving");

        document.getElementById("Lshooting").textContent = "handling";
        document.getElementById("Lshooting").setAttribute("id", "Lhandling");  
        document.getElementById("Ishooting").setAttribute("id", "Ihandling");        
      
        document.getElementById("Lpassing").textContent = "kicking";
        document.getElementById("Lpassing").setAttribute("id", "Lkicking");  
        document.getElementById("Ipassing").setAttribute("id", "Ikicking");        
      
        document.getElementById("Ldribbling").textContent = "reflexes";
        document.getElementById("Ldribbling").setAttribute("id", "Lreflexes");     
        document.getElementById("Idribbling").setAttribute("id", "Ireflexes");        
   
        document.getElementById("Ldefending").textContent = "speed";
        document.getElementById("Ldefending").setAttribute("id", "Lspeed");       
        document.getElementById("Idefending").setAttribute("id", "Ispeed");        
 
        document.getElementById("Lphysical").textContent = "positioning";
        document.getElementById("Lphysical").setAttribute("id", "Lpositioning");    
        document.getElementById("Iphysical").setAttribute("id", "Ipositioning");        
    

    }

});


// validate and add
const ajouter = document.getElementById("ajout");
ajouter.addEventListener("submit", function (e) {
    e.preventDefault();

})

let playerPos;
const name = document.getElementById("Iname");
const photo = document.getElementById("Iphoto");
const pos = document.getElementById("positionSelect");
pos.addEventListener('change', function (e) {
    playerPos = e.target.value;
});
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

const nameRegex = "^[A-Za-z]+"
const flagsRegex = "^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)+\.(jpg|jpeg|png|gif|bmp|webp|tiff|svg)$"
const positionRegex ="^[A-Z]{2}$"
const statsRegex = "^[0-9]{2,3}$"

function validation() {

}




























// function validation(){


//     const name = document.getElementById("name");

// }








