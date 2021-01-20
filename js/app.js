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

function createElement (parent, value, content) {
    const element = document.createElement(value);
    element.textContent = content;
    parent.append(element);
}

function spinner(value) {
    if (value === true) {
        document.getElementsByTagName("div")[0].setAttribute("id", "shading");
        document.getElementsByTagName("span")[0].setAttribute("id","spinner");
    }
    if (value === false) {
        document.getElementsByTagName("div")[0].removeAttribute("id");
        document.getElementsByTagName("span")[0].removeAttribute("id");
    }
}

spinner(true);

const list = new List(document.getElementById("root"));

const request = "https://swapi.dev/api/films/";

const ajax = async request => await fetch(request).then(req => req.json());


function episodes () {
    return ajax(request).then(({results}) => {
        
        
        results.forEach(res => list.add(`Episode ${res.episode_id} `));
        
        
        results.forEach((res, iter) => {
            const li = document.getElementsByTagName("li")[iter];
            createElement(li, "h3", res.title)
            createElement(li, "p", res.opening_crawl);
            
            
            res.characters.forEach((chars) => {
                ajax(chars).then((characters) =>  createElement(li, "p", characters.name))
            });


            
        });
            
    }).catch(new Error("Failure request"));

}

episodes().then(() => spinner(false))