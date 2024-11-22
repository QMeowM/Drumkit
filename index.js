
// detect button click
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    var audio = new Audio("./sounds/tom-1.mp3");
    buttons[i].addEventListener("click", function() {
        var butonClicked = this.innerHTML;
        makeSound(butonClicked);
        flashButton(butonClicked);
    })}


// detect key press
document.addEventListener("keydown", function(evt) {
    makeSound(evt.key);
    flashButton(evt.key);
})

// making sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Nah");
            break;
    }
}

// flash button

function flashButton(currentKey) {
    var currentKey = document.querySelector("." + currentKey);
    currentKey.classList.add("pressed");
    setTimeout(()=>{currentKey.classList.remove("pressed");}, 100);
}