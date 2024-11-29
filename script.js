async function CallAPI() {
    let url = "players.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();
    players = json.players;
    bringCards(players);

}

CallAPI();
let players;
let container = document.getElementById("container")
function bringCards(players) {
    container.innerHTML = "";
    players.forEach(player => {
        if (player.position != "GK") {
            container.innerHTML += `
           
            <div class="col-md-4 players " >
                <div class="row ">
                    <div class="col-md-10 ">
                        <img src="${player.photo}" alt="playerphoto"/>
                    </div>
                    <div class="col-md-2">
                      <p class="text-center"><strong>${player.rating}</strong></br>${player.position}</p>
                    </div>
                </div>
                <div class="row">
                            <p class="text-center"><strong>${player.name}</strong></p>
                        </div>
                <div class="row">
                    <div class="col-md-2">
                        <p><strong>PAC</strong></br>${player.pace}</p>
                    </div>
                    <div class="col-md-2">
                       <p><strong>SHO</strong></br>${player.shooting}</p>
                    </div>
                    <div class="col-md-2">
                       <p><strong>PAS</strong></br>${player.passing}</p>
                    </div>
                    <div class="col-md-2">
                       <p><strong>DRI</strong></br>${player.dribbling}</p>
                    </div>
                    <div class="col-md-2">
                       <p><strong>DEF</strong></br>${player.defending}</p>
                    </div>
                    <div class="col-md-2">
                       <p><strong>PHY</strong></br>${player.physical}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 p-5">
                    <img src="${player.flag}" alt="" />
                    </div>
                    
                </div>
                </div>

            `}

        else {
            {
                container.innerHTML += `
                    
                    <div  class="col-md-4 players " >
                        <div class="row">
                            <div class="col-md-10">
                                <img src="${player.photo}" alt="playerphoto"/>
                            </div>
                            <div class="col-md-2">
                      <p class="text-center"><strong>${player.rating}</strong></br>${player.position}</p>
                            </div>
                        </div>
                        <div class="row">
                            <p><strong>${player.name}</strong></p>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <p><strong>DIV</strong></br>${player.diving}</p>
                            </div>
                            <div class="col-md-2">
                               <p><strong>HAN</strong></br>${player.handling}</p>
                            </div>
                            <div class="col-md-2">
                               <p><strong>KIC</strong></br>${player.kicking}</p>
                            </div>
                            <div class="col-md-2">
                               <p><strong>REF</strong></br>${player.reflexes}</p>
                            </div>
                            <div class="col-md-2">
                               <p><strong>SPE</strong></br>${player.speed}</p>
                            </div>
                            <div class="col-md-2">
                               <p><strong>POS</strong></br>${player.positioning}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                 <img src="${player.flag}" alt="" />

                            </div>
                            
                        </div>
                    <div>
                    
                    `}

        }
    });

}
function showForm(){
    document.getElementById("ajout").style.display="block";
}
document.getElementById("4-4-2").style.display = "none";


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









