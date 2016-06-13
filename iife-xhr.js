
function showCarnivores (carnivores) {
    let list = document.getElementById("carnivores-list");
    let outputString = "";
    for (let i = 0; i < carnivores.length; i++) {
        let currentCarnivore = carnivores[i];
        outputString += `<h1>${currentCarnivore.name}</h1><h3>${currentCarnivore.family}</h3>`;
        list.innerHTML = outputString;
     }
};

function showHerbivores (herbivores) {
    let list = document.getElementById("herbivores-list");
    let outputString = "";
    for (let i = 0; i < herbivores.length; i++) {
        let currentHerbivore = herbivores[i];
        outputString += `<h1>${currentHerbivore.name}</h1><h3>${currentHerbivore.family}</h3>`;
        list.innerHTML = outputString;
    }
};

function killHerbivores (herbivores) {
    let list = document.getElementById("herbivores-list");
    let outputString = "";
    outputString += `<h1> "you have killed the herbivores, way to go" </h1>`;
    list.innerHTML = outputString;
};
function killCarnivores(carnivores) {
    let list = document.getElementById("carnivores-list");
    let outputString = "";
    outputString += `<h1> "you have killed the carnivores, way to go" </h1>`;
    list.innerHTML = outputString;
};
////////Original function with callbacks///////////////
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
// Predator.loadHerbivores(killHerbivores);
// Predator.loadHerbivores(killCarnivores);