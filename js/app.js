class List {
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
            this.listElement.append(List.createListItem(text));
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

const list = new List(document.getElementById("ul"));

const request = "https://swapi.dev/api/films/";

// const ajax = async (request) => await fetch(request).then(res => res.json());


// async function episodes () {
//     // const json = 
//     const {results} = ajax(request)
//     return results;
// }
// console.log(episodes());

async function episodes () {
    const req = await fetch(request).then(res => res.json());
    const { results } = req;
    results.forEach(element => {
        console.log(element.episode_id, element.title, element.opening_crawl);
    });
}


episodes();