export class Ball {
  constructor() {
    this.obj = {
      number: null,
      isClicked: false,
    };
  }
  showBall() {
    console.log(this.obj.isClicked, this.obj.number);
  }
}
