async function CallAPI() {
    let url = "players.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();
    
    console.log(json);
    
}

CallAPI();
let container = document.getElementById("container")
function bringCards(players){
    container.innerHTML="";
    players.forEach(player => {
        container.innerHTML+=`
        <div class="col-md-6">

        <div>
        `
    });

}