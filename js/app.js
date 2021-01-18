const req = "https://swapi.dev/api/films/";

async function episodes () {
    // const res = await fetch(`${req}films`, { method: "GET" });
return fetch(req, { method: "GET" });
    // return res.json;
}


console.log(episodes().then(data => data.json));