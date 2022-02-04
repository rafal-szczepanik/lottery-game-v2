import { BallsArena } from "./BallsArena.js";

const numberText = document.querySelector(".display-numbers-span");
const lotteryBtn = document.querySelector(".lottery-btn");
const ballContainer = document.querySelector(".container");
const myNumbers = document.querySelector(".choosen-numbers span");
const popUp = document.querySelector(".pop-up");
const popUpTxt = document.querySelector(".pop-up span");
const resetBtn = document.querySelector(".reset-btn");

//Manage choosing ball number by changing this field
//!! It changes both the number of ball you can chose and random numbers loterry
const myChoosenLength = 6;

const ballsArena = new BallsArena();

const displayBallsArena = () => {
  ballsArena.arenaArr.forEach((ball) => {
    const myBall = document.createElement("div");
    myBall.classList.add("ball");
    myBall.innerText = ball.number;
    myBall.dataset.number = ball.number;
    ballContainer.appendChild(myBall);
    ballsArena.displaydBallsArr.push(myBall);
    myBall.addEventListener("click", () => clickBall(ball, myBall));
  });
};

//If you click a ball then it should
//1 .change its color to gray
//2. display clicked number on the "Your types bar"
//3. If more than 6 balls then you get alert
const clickBall = (ballData, displaydBall) => {
  ballsArena.changeBallState(ballData);
  showClickBallAlert(ballData);
  displayYourTypesTxt();
  displayBallIsClicked(ballData, displaydBall);
};
//
//==============clickBall functions Start================
//
const showClickBallAlert = (ballData) => {
  if (ballsArena.getChoosenBallsLength() > myChoosenLength) {
    ballData.isClicked = false;
    return alert("Wybrałeś już 6 liczb");
  }
};

const displayYourTypesTxt = () => {
  myNumbers.innerText = "";
  ballsArena.arenaArr
    .filter((ball) => ball.isClicked)
    .forEach((ball) => {
      myNumbers.innerText += ` *${ball.number}*`;
    });
};
const displayBallIsClicked = (ballData, displaydBall) => {
  ballData.isClicked
    ? displaydBall.classList.add("clicked-ball")
    : displaydBall.classList.remove("clicked-ball");
};
//
//==============clickBall functions End================
//

//
// Main function responsible for starting lottery
//
const playLotery = () => {
  const lotteryBallsArr = [];
  if (ballsArena.getChoosenBallsLength() < myChoosenLength) {
    return alert(`Musisz wybrać conajmniej ${myChoosenLength} liczb`);
  }
  displayRandomBalls(lotteryBallsArr);
  displaWinningNumbers(lotteryBallsArr);
  lotteryBtn.classList.add("visible");
};
//
//==============playLotery functions Start================
//
const displayRandomBalls = (arr) => {
  const lotteryArr = ballsArena.getRandomBallsArena(myChoosenLength);
  ballsArena.displaydBallsArr.forEach((ball) => {
    lotteryArr.forEach((lotteryBall) => {
      if (Number(ball.dataset.number) === lotteryBall) {
        arr.push(ball);
        addClass("choosen-ball", 0, arr);
      }
    });
  });
};
// Recursive function that display random ball as a blue one at intervals
const addClass = (className, index, arr) => {
  if (typeof index === "undefined") {
    index = 0;
  }

  if (arr.length > index) {
    arr[index].classList.add(className);
    setTimeout(() => addClass(className, index + 1, arr), 500);
  }
};
const displaWinningNumbers = (arr) => {
  setTimeout(() => {
    arr.forEach((ball) => {
      popUp.classList.remove("visible");
      numberText.innerText += ` ${ball.dataset.number},`;
    });
    numberText.innerText = numberText.innerText.replace(/,\s*$/, "");
  }, 3000);
};
//
//==============playLotery functions End================
//

displayBallsArena();
console.log("working");

lotteryBtn.addEventListener("click", playLotery);
