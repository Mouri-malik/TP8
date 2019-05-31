//TP8

//1.1
let furniture = [{
  name: "Chevet",
  price: "65",
  id: 1,

}, {
  name: "Table",
  price: "100",
  id: 2,
}, {
  name: "Armoire",
  price: "200",
  id: 3,
}];

//1.2

let currentId;
currentId = furniture.length -1;// prend le dernier élement du tableau (id)

function addFurniture(newName, newPrice, currentId){

  let newFurniture = {
  name: newName,
  price: newPrice,
  id: currentId,
}
currentId++;
furniture.push(newFurniture);
};

addFurniture("PS4", "300", currentId);

console.log(furniture)


function fTable(){

  let currentElmt;
  let table;

  table = document.createElement("table");
  document.body.appendChild(table);


  for (var i = 0; i < furniture.length; i++) {
    currentElmt = furniture[i];

    let tr = document.createElement("tr");
    table.appendChild(tr);

    let tdName = document.createElement("td");
    tr.appendChild(tdName);
    tdName.textContent = currentElmt.name;

    let tdPrice = document.createElement("td");
    tr.appendChild(tdPrice);
    tdPrice.textContent = currentElmt.price;

    let id = document.createElement("td");
    tr.appendChild(id);
    id.textContent = currentElmt.id;

    let button = document.createElement("input");
    button.type = "button";
    button.value = "supprimer";
    tr.appendChild(button);

    button.addEventListener("click", function(){ //Function anonyme
      table.removeChild(tr);
      furniture.splice(currentElmt)
    }
    ,false);
  }
} fTable();



function formulaire(){

  let container = document.createElement("div");
  document.body.appendChild(container);

  let formulaire = document.createElement("form");
  container.appendChild(formulaire);

  let nameFurniture = document.createElement("p");
  nameFurniture.textContent = "Nom du meuble "
  formulaire.appendChild(nameFurniture);
  let nameInput = document.createElement("input");
  nameFurniture.appendChild(nameInput);

  let addPrice = document.createElement("p");
  addPrice.textContent = "Prix du meuble";
  formulaire.appendChild(addPrice);
  let priceInput = document.createElement("input");
  addPrice.appendChild(priceInput);

  let button = document.createElement("input");
  button.type = "button";
  button.value = "Ajouter";
  formulaire.appendChild(button)
  button.addEventListener("click", addValue, false);

return formulaire;
}

console.log(formulaire()) //affiche en console la valeur retourné (ici le formulaire).

  function addValue(){
  furniture.push(nameInput.value, priceInput.value);
  fTable();
}
/*
let array = ["a", "b", "c"];

let value = array.push("g")

console.log(array);


let tableau = [10, 20, 30, 40];

let addValue = tableau.push(3000);

console.log(tableau.length);






/*function User(name, age, hair){
  this.name = name;
  this.age = age;
  this.hair = hair
}


let Personn = new User("Malik", 26, "Black");

console.log(Personn);


function Eleve(name, age, nationality){
  this.name = name;
  this.age = age;
  this.nationality = nationality;
}

let Young = new Eleve("Gargantua", 20, "Japonnais");

console.log(Young)
*/


/*
let moyennes = [{
  name: "Guts",
  moyenne: 15,
}, {
  name: "Casca",
  moyenne:8,
}, {
  name: "Grifith",
  moyenne: 10 ,
},{
  name: "Levi",
  moyenne: 6,
}
]

var aLaMoyenne = function(eleves){
  var tabMoyenne = [];

  for(let i = 0; i < eleves.length; i++){
    var eleve = eleves[i];
    if(eleve.tabMoyenne >= 10){
      tabMoyenne.push(eleve)
    }

  }
  return tabMoyenne;
}


console.log(aLaMoyenne(moyennes));
*/
