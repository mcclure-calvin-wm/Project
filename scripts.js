var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// sets canvas dimensions
canvas.style.width = window.innerWidth - 32 + "px";
canvas.style.height = window.innerHeight - 32 + "px";

// updates values and code
function update (){

}

// draws code
function render (){

    //clears the canvas
    context.clearRect(0,0,1500,670);

    //sets refresh rate to monitor refresh rate
    requestAnimationFrame(render);
}

// runs once, sets up game
function init (){


    // creates a refresh rate for the canvas
    setInterval(update, 1000 / 60);
    requestAnimationFrame(render);
}

function Entity (x, y, width, height, sprite){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;

    // function that creates the img on canvas
    this.render = function () {
        context.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}

function Frog (x, y, width, height, sprite, player){
    var e = new Entity(x, y, width, height, sprite);
    
}

init();