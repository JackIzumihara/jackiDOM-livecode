let mainTitle = document.getElementById("main-title");
let desc = document.getElementById("description");
mainTitle.style.textAlign = "center";
desc.style.textAlign = "center";

let pizzaList = document.getElementById("pizza-list");
pizzaList.style.justifyContent = "space-around";

let pizzaImg = document.getElementsByClassName("pizza-img")[1];
pizzaImg.src = "images/veggie.png";

let pepText = document.getElementsByClassName("pizza")[0];
pepText.style.color = "red";

let pepText2 = document.getElementsByClassName("pizza")[2];
pepText2.style.color = "orange";
