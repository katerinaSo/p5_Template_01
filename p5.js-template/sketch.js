// Single-sketch example

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(100);
  fill(255, 0, 0);

  for (let i = 0; i < height; i++) {
    stroke(i, i, 0)
    line(i, i, width, height / 2)
    rectMode(CENTER)
    rect(i, i, i / 5, i / 7)
  }
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
}
