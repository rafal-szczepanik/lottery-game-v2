import { Ball } from "./Ball.js";
export class BallsArena {
  arenaArr = [];
  choosenBallsArr = [];
  displaydBallsArr = [];
  arrLength = 49;

  constructor() {
    this.createBallsArena();
  }
  createBallsArena() {
    for (let i = 0; i < this.arrLength; i++) {
      const ball = new Ball();
      ball.obj.number = i + 1;
      this.arenaArr.push(ball.obj);
    }
    return this.arenaArr;
  }

  changeBallState(ball) {
    ball.isClicked = !ball.isClicked;
  }

  getChoosenBalls() {
    return this.arenaArr.filter((ball) => ball.isClicked);
  }
  getChoosenBallsLength() {
    return this.arenaArr.filter((ball) => ball.isClicked).length;
  }

  getRandomBallsArena(arrLength) {
    const lotteryArr = [];
    while ([...new Set(lotteryArr)].length < arrLength) {
      lotteryArr.length = 0;
      for (let i = 0; i < arrLength; i++) {
        lotteryArr.push(Math.floor(Math.random() * (49 - 1) + 1));
      }
    }
    return lotteryArr;
  }
}
