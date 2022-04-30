// import modules
const rs = require('readline-sync');

// rs.question()
// rs.keyIn()

// building block of the grid holds this info for the block 
class girdBlock {
  constructor(){
    this.occupied = false;
    this.hit = false;
  }

  toggleOccupied(){
    this.occupied = !this.occupied
  }

  toggleHit(){
    this.hit = !this.hit
  }

  display() {
    if(this.occupied && this.hit) {
      return 'X';
    } else 
    if (!this.occupied && this.hit) {
      return 'O';
    } else {
      return ' ';
    }
  }

}

class board {
  constructor(){
    this.board = [];
  }

  setBoard(rows = 3){
    this.board = [];

    for(let i = 0; i<rows; i++){
      let newRow = []
      for(let j = 0; j<rows; j++) {
        newRow.push(new girdBlock())
      }
      this.board.push(newRow)
    }
  }

  hitBlock(blockStr) {
    let blockArr = blockStr.split('')

    switch(blockArr[0]) {
      case 'A':
      case 'a':
        blockArr[0] = 0;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 1;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 2;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 3;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 4;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 5;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 6;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 7;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 8;
        break;
      case 'A':
      case 'a':
        blockArr[0] = 9;
        break;
      default:
        console.log(`Sorry we couldn't recognize your input please try again.`)
    }
    
  }

  display() {
    let displayStr = ``
    let chars = `ABCDEFGHIJ`
    // first row of numbers
    for(let i = 0; i < this.board.length; i++) {
      displayStr += `   ${i + 1}`
    }
    displayStr += `\n`

    // rows of dashes then grid items
    this.board.forEach((row, i) => {
      // dashes
      displayStr += `  `
      row.forEach(() => displayStr += `- - `)
      displayStr += `-`
      displayStr += `\n`
      // grid items
      displayStr += `${chars[i]}`
      row.forEach(girdBlock => displayStr += ` | ${girdBlock.display()}`)
      displayStr += ` |\n`
    })
    // final row of dashes
    displayStr += `  `
    this.board.forEach(()=> {
      displayStr += `- - `
    }) 
    displayStr += `-`
    return displayStr
  }
}

let playerBoard = new board()
playerBoard.setBoard(10)


console.log(playerBoard.display())