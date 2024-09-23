let cornerHits = 0;
let edgeHits = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

let x = 50;
let y = 50;
let xSpeed = 3;
let ySpeed = 2;
let rectColor = [100, 200, 150];

function draw() {
  background(220);
  
  fill(rectColor);
  rectMode(CENTER);
  rect(x, y, 50, 50);
  
  x += xSpeed;
  y += ySpeed;
  
  let hitEdge = false;
  if (x > width - 25 || x < 25) {
    xSpeed *= -1;
    hitEdge = true;
  }
  if (y > height - 25 || y < 25) {
    ySpeed *= -1;
    hitEdge = true;
  }
  
  if ((x <= 25 || x >= width - 25) && (y <= 25 || y >= height - 25)) {
    cornerHits++;
    document.getElementById('cornerHits').innerText = `Corner Hits: ${cornerHits}`;
    rectColor = [255, 255, 255];
  } else if (hitEdge) {
    edgeHits++;
    document.getElementById('edgeHits').innerText = `Edge Hits: ${edgeHits}`;
    rectColor = [random(255), random(255), random(255)];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
