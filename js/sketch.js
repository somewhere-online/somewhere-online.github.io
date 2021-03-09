var canvas;
var x;
var y;
var r, g, b;
var w, h;
var interval; 
var counter = 0;

function setup () {
    canvas = createCanvas(400, 400);
    x = (windowWidth - width) / 2;
    y = (windowHeight - height) / 2;
    canvas.position(x,y);
    canvas.style('z-index', '-1')
    background('white');

    inp = createInput();
    inp.position(x + canvas.width/2 - inp.width/2 ,y + canvas.height/2 - inp.height/2);
    inp.input(inputEvent);

    button = createButton('Go');
    button.position(x + canvas.width/2 - button.width/2 ,y + canvas.height/2 + inp.height/2 + 5);
    button.mousePressed(indefSomewhere);
}

function inputEvent() {
    console.log(this.value())
}

function goSomewhere() {
    const place = inp.value();
    // for (let i = 0; i < 20; i++) {
        push();
        fill(random(255), random(255), random(255));
        translate(random(width), random(height));
        rotate(random(2*PI));
        beginShape();
        vertex(80, 50);
        vertex(300, 50);
        vertex(350, 95);
        vertex(300, 140);
        vertex(80, 140);
        scale(0.5);
        endShape(CLOSE);
        push();
        fill(random(255), random(255), random(255));
        text(place, 100, 124);
        pop();
        pop();
        counter++;
        if(counter >= 5) {
            clearInterval(interval);
            counter = 0;
        }
    //   }
}

function indefSomewhere() {
    interval = setInterval(goSomewhere, 100);
}


function draw() {
    fill(0);
    beginShape();
    vertex(80, 50);
    vertex(300, 50);
    vertex(350, 95);
    vertex(300, 140);
    vertex(80, 140);
    endShape(CLOSE);
    fill(255);
    if(inp.value() != null) {
        textSize(32);
        text(inp.value(), 87.5, 125);
    }
}