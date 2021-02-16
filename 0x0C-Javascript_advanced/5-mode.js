function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let p = document.createElement("p");
    p.innerHTML = "Welcome Holberton!";
    document.body.append(p);

    let spookyBtn = document.createElement("button");
    spookyBtn.id = "spookyBtn";
    spookyBtn.innerText = "Spooky";
    document.body.append(spookyBtn);

    let darkBtn = document.createElement("button");
    darkBtn.id = "darkBtn";
    darkBtn.innerText = "Dark Mode";
    document.body.append(darkBtn);

    let screamBtn = document.createElement("button");
    screamBtn.id = "screamBtn";
    screamBtn.innerText = "Scream Mode";
    document.body.append(screamBtn);

    document.getElementById("spookyBtn").onclick = spooky;
    document.getElementById("darkBtn").onclick = darkMode;
    document.getElementById("screamBtn").onclick = screamMode;

}

main();
