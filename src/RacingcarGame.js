import Car from "./Car.js";
import UserInput from "./UserInput.js";

class RacingcarGame {
  racingCar;
  tryNumber;
  raceCount;
  async start() {
    try {
      const user = new UserInput();
      this.racingCar = await user.getCarNames();
      this.tryNumber = await user.getTryNumber();
      this.raceCount = this.tryNumber;

      while (this.raceCount > 0) {
        this.race();
        this.raceCount--;
      }

      this.printWinner();
    } catch (error) {
      throw error;
    }
  }

  race() {
    const car = new Car();

    for (let carName in this.racingCar) {
      if (car.chooseGoOrStop()) {
        this.racingCar[carName]++;
      }
    }

    this.printRacingResult();
  }

  printRacingResult() {
    // 첫번째 실행결과 출력일때만 '실행 결과' 문구를 출력한다.
    // racingCar 를 순회하며 자동차이름 : 결과를 출력한다.
    // 결과를 출력할 땐, "-".repeat(number) 을 사용할 수 있다.
    // 맨 마지막 공백 줄이 있어야 한다.
  }

  printWinner() {
    // getWinner()로 우승자를 확인한다.
    // 반환된 값의 길이가 1이라면 우승자는 1명이므로 "최종 우승자 : 자동차이름" 출력한다.
    // 반환된 값의 길이가 2이상이면 우승자는 여러 명이므로 join 매서드 사용하여 "최종 우승자 : 자동차1, 자동차2" 출력한다.
  }

  getWinner() {
    // racingCar를 순회하며 가장 높은 값을 가진 자동차 이름을 찾는다.
    // 자동차 이름이 담긴 배열을 반환한다.
  }
}

export default RacingcarGame;
