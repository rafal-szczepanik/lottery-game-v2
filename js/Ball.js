export class Ball {
  constructor(obj) {
    this.obj = obj;
  }
  showBall() {
    console.log(this.obj.isClicked, this.obj.number);
  }
}
