function createElement(data) {
    let newElement = document.createElement("p");
    newElement.innerHTML = JSON.parse(data).query.pages['21721040'].extract;
    document.body.append(newElement);
}

function queryWikipedia(callback) {
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open("GET", url);
    xmlRequest.onload = () => {
        callback(xmlRequest.response);
    };
    xmlRequest.send();
}

queryWikipedia(createElement);