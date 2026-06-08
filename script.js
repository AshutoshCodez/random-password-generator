let generate = document.getElementById("generate")
let pass = document.getElementById("pass")
let hard = document.getElementById("hard")
let medium = document.getElementById("medium")
let easy = document.getElementById("easy")
let showpass = document.getElementById("showpass")
let showxd = document.getElementById("showxd")

let passhard = [
  "K9#vT2!mX8@qL4p",
  "R$7nY1&zP3!kW9d",
  "M#8qL2@tV5!xN7r",
  "Z!4pK9&mC2@jT8q",
  "H7@xW3#nP9!vR2k",
  "B@5mL8!xQ2#tN7v",
  "Y#3kP9@rW4!mT8q",
  "D!7vX2#nK9@pL5r",
  "Q$8mT3!zR6@kW2p",
  "N@4xV9#qP7!mL3t"
];

let passmedium = [
    "Tiger92Star",
    "Rocket7Blue",
    "CodeMaster45",
    "GreenLeaf88",
    "PixelDrive23",
    "WinterSky71",
    "CoffeeBean56",
    "MoonLight84",
    "TechGuru39",
    "RiverStone27"
];

let passeasy = [
    "apple123",
    "hello456",
    "orange789",
    "welcome12",
    "sunshine34",
    "football56",
    "computer78",
    "banana90",
    "monkey123",
    "purple456"
];

pass.style.display = "none";

generate.addEventListener("click", () => {
    if(pass.style.display === "none"){
        pass.style.display = "block";
        showpass.style.display = "none"
    }else{
        pass.style.display = "none";
    }
});

generate.addEventListener("click", () => {

    let passwords;

    if (hard.checked) {
        passwords = passhard;
        hard.style.display = "none"
    } 
    else if (medium.checked) {
        passwords = passmedium;
        medium.style.display = "none"
    } 
    else if (easy.checked) {
        passwords = passeasy;
        easy.style.display = "easy"
    } 
    else {
        alert("Select a password level!");
        return;
    }

    let randomIndex = Math.floor(Math.random() * passwords.length);

    showxd.innerText = passwords[randomIndex];
    pass.style.display = "block";
    showpass.style.display = "none";

});

console.log("script file is opening")