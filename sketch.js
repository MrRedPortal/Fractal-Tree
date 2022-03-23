var angle =0;

var slider;
function setup() {
  createCanvas(800, 800);
  slider = createSlider(0,TWO_PI,PI/4,0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  var length = 100;
  stroke(255);
  translate(200,height);
  branch(length);
}

function branch(length){
  line(0, 0, 0, -length);
  translate(0,-length);
  
  if(length>1){
    push();
    rotate(angle);
    branch(length*0.67);
    pop();
    push();
    rotate(-angle);
    branch(length*0.67);
    pop();
  }
}
