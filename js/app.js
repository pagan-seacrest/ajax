const req = "https://swapi.dev/api/films/";

async function episodes () {
    // const res = await fetch(`${req}films`, { method: "GET" });
return fetch(req, { method: "GET" });
    // return res.json;
}


console.log(episodes().then(data => data.json));

const list = document.getElementById("ul");

class Doc {
    constructor (element) {
        this.listElement = element;
        this.textList = [];
    }

    static createListItem (text) {
        const li = document.createElement("li");
        li.textContent = text;

        return li;
    }

    update () {
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        for (const text of this.textList) {
            this.listElement.append(Doc.createListItem(text));
        }
    }

    add (text) {
        this.textList.push(text);
        this.update();
    }

    remove (index) {
        this.textList.splice(index, 1);
        this.update();
    }
}

let def = new Doc (10, 11);
