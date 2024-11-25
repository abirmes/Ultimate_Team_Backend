async function CallAPI() {
    let url = "players.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();
    
    console.log(json);
    
}

CallAPI();
