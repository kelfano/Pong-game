# Pong Game

A basic pong game using SVGs. Most of the scripting writings are written in javascript. Files are either imported or exported to extract and exchange information which defined within each js file. The objects then created using SVG are rendered in the Game.js file to display the representation on the web browser. 

## Setup

**Set up a new project with Webpack:**

**Install Webpack files:**

`> npm install -g webpack`

**Install Webpack files and link to the server :**

`> npm install -g webpack-dev-server`

**Run Webpack to bundle different assets:**

`> npm install --save-dev sass-loader`
`> npm install --save-dev css-loader`
`> npm install --save-dev style-loader`
`> npm install --save-dev node-sass`

**Run Webpack to bundle fonts and images:**

`> npm install --save-dev file-loader`

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

* spaceBar: pause


## Technology used
-Webpack compiler
-npm scripts
-Dependencies (inc devDependency)
-Javascript modules (keyword such as import & export)
-ES.next Classes
  ->methods 
  ->properties (constructor)
  ->this & new keyword
-DOM properties
  -> document.getElementById
  -> document.addEventListener
  -> document.createElementNS
-SVGs
  -> Shapes and sizes (line, circle, rectangle)
  -> Different classes (board, paddles, ball and games)

## Personal learning
In this project, I start off by learning how to use webpack to compile files and bundle them together.I have also learnt how to use SVGs to render a simple objects such as a ball, board, paddles. From that, I know how to use "set attributes" method to create a prototype for the pong game.I have also used different methods such as "paddle collision", "wall collision", "reset" to generate a real animation of a pong game.
In addition, I have created multiple balls for fun.