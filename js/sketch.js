var canvas;
var interval; 
var counter = 0;
var clicked = 0;
var poly = [];
hit = false;
var textW;
var textContent;

function FocusOnInput()
{
     document.getElementById("InputID").focus();
}

function windowResized() {
}

function setup () {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')
    background('white');

    inp = createInput().attribute('maxlength', 15)
    inp.position(85, 90);
    inp.input(inputEvent);
    inp.style('background-color', 'black');
    inp.style('font-size', '32px');
    inp.style('color', 'white');
    inp.style('width', '200px');
    inp.id('InputID');
   

    // button.mousePressed(indefSomewhere);
    poly[0] = createVector(80, 50);
    poly[1] = createVector(300, 50)
    poly[2] = createVector(350, 95)
    poly[3] = createVector(300, 140)
    poly[4] = createVector(80, 140)
    fill(0);
    beginShape();
    for (const { x, y } of poly)  vertex(x, y);
    endShape(CLOSE);

}

function inputEvent() {
    // console.log(this.value())
}


function saveSketch() {
    saveCanvas();
}


// function goSomewhere() {
//     const place = inp.value();
//     // for (let i = 0; i < 20; i++) {
//         push();
//         fill(random(255), random(255), random(255));
//         translate(random(windowWidth), random(windowHeight));
//         rotate(random(2*PI));
//         noStroke();
//         beginShape();
    
//         vertex(80, 50);
//         vertex(300, 50);
//         vertex(350, 95);
//         vertex(300, 140);
//         vertex(80, 140);
//         scale(0.5);
//         endShape(CLOSE);
//         push();
//         fill(random(255), random(255), random(255));
//         text(place, 100, 124);
//         pop();
//         pop();
//         counter++;
//         console.log(counter);
//         if(counter >= 5) {
//             clearInterval(interval);
//             counter = 0;
//             console.log(counter);
//         }
//     //   }
// }

function drawSomewhere() {
    const place = inp.value();
    if (place === 'are.na') {
        window.open('http://are.na/somewhere')
    }
    textContent = inp.value();
    textW = textWidth(textContent);
    if(textW > textWidth('Somewhere')) {
        textW =  textW * 1.4;
        // console.log(textW)
    } else if (textW === textWidth('WWWWWWWWWWWWWW')){
        textW =  textW * 1.6;
    } else {
        textW = 0;
        // console.log(textW)
    }
    
    // for (let i = 0; i < 20; i++) {
        push();
        fill(random(255), random(255), random(255));
        translate(random(width), random(height));
        rotate(random(2*PI));
        noStroke();
        beginShape();
        vertex(80, 50);
        vertex((300 + textW), 50);
        vertex((350 + textW), 95);
        vertex((300 + textW), 140);
        vertex(80, 140);
        scale(0.5);
        endShape(CLOSE);
        push();
        textSize(32);
        fill(random(255), random(255), random(255));
        text(place, 100, 124);
        pop();
        pop();
}

// function indefSomewhere() {
//     clearInterval(interval);
//     interval = setInterval(goSomewhere, 100);
// }


function draw() {
    frameRate(50);
    // fill(255);
    // if(inp.value() != null) {
    //     textSize(32);
    //     text(inp.value(), 87.5, 125);
    // }
    cursor(CROSS);
    beginShape();
    for (const { x, y } of poly)  vertex(x, y);
    endShape(CLOSE);
    hit = collidePointPoly(mouseX, mouseY, poly);
    if(hit && mouseIsPressed) {
        setTimeout(drawSomewhere, 100);
    }
    textContent = inp.value();
    textW = textWidth(textContent);
    // console.log(textW);
}

