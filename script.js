async function CallAPI() {
    let url = "players.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();

    console.log(json);
    bringCards(json);

}

CallAPI();
let container = document.getElementById("container")
function bringCards(players) {
    container.innerHTML = "";
    players.forEach(player => {
        container.innerHTML += `
        <div class="col-md-6" style="background-image: url(src/assets/img/placeholder-removebg.png);">
            <div class="row">
                <div class="col-md-10">
                    <img src="${player.photo}" alt="playerphoto"/>
                </div>
                <div class="col-md-2">

                </div>
            </div>
            <div class="row">
                <div class="col-md-2">
                    <p><strong>PAC</strong></br>${player.pace}</p>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
            </div>
        <div>
        `
    });

}