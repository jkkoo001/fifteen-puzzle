const { table } = require('table');
const inquirer = require('inquirer');
const stringify = require('stringify');


// const tiles = ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 

// const initTiles = () => {
//   for (let i = tiles.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let k = tiles[i];
//     tiles[i] = tiles[j];
//     tiles[j] = k;
//   }
// }

//initTiles();


// let nTiles = [];
// while(tiles.length > 0) {
// 	nTiles.push(tiles.splice(0,4));
// }
// console.log(table(nTiles));

// inquirer.prompt([
//     {
//         name: 'tileNum',
//         message: 'Enter tile number',
//     },
// ])


let tiles = [];
let shuffledTiles = [];
const finalTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, " "];
let move = "";

const initTiles = () => {
  tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, " "];
  for (let i = tiles.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = tiles[i];
    tiles[i] = tiles[j];
    tiles[j] = k;
  }
}

initTiles();

const printState = () => {
  
  while(tiles.length > 0) {
    shuffledTiles.push(tiles.splice(0,4));
  }
  console.log(table(shuffledTiles));
}

printState();

let currTiles = shuffledTiles.join();
const isFinalState = () => (JSON.stringify(currTiles) === JSON.stringify(finalTiles));


console.log(isFinalState());
//console.log(currTiles);





const checkBlankIndex = () => {
  for (let i = 0; i <= currTiles.length; i++) {
    if (currTiles[i] === " "){
      blankIndex = i;
    } 
  }
  console.log(blankIndex);
}

checkBlankIndex();



const finish = () => {
  console.log("Congrats!");
  }


// inquirer
//   .prompt([
//     {
//       name: "move",
//       type: "input",
//       message: "Enter direction to move blank tile (u for up, d for down, l for left, r for right):",
//     },
//   ])
//   .then(answers => {
//     move = answers.move;
//   });



// const updateState = move => {
//   if (move === "u") {
//     console.log("yes");
//   }
//   else {
//     console.log("no");
//   }
// }

