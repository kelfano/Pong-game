import {SVG_NS} from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;


    //Center ball in board initially
    this.reset();
  }

reset() {
  this.x = this.boardWidth/2;
  this.y = this.boardHeight/2;

  //generate a random number between -5 and 5
  this.vy = Math.floor(Math.random() * 10 - 5); 

  //a number between -5 and 5, based on the vy
  this.vx = this.direction * (6 - Math.abs(this.vy));
}


render(svg){
  this.x += this.vx;
  this.y += this.vy;
  
  let ball = document.createElementNS(SVG_NS,'circle');
  ball.setAttributeNS(null, 'r',this.radius);
  ball.setAttributeNS(null, 'cx',this.x);
	ball.setAttributeNS(null, 'cy',this.y);
	ball.setAttributeNS(null, 'fill','#FFFFFF');
  

 svg.appendChild(ball);
}

}