import Messages from "./constants/Messages.js";
import { Maximum, Minimum } from "./constants/Standard.js";

class UserInput {
  async getCarNames() {
    // 사용자로부터 자동차의 이름을 입력받는다.
    // 입력받은 자동차 이름을 쉼표를 기준으로 split 매서드를 이용하여 나눈다.
    // isVaildCarName() 을 사용하여 정상적인 이름인지 확인한다.
    // 모두 정상일경우 자동차 이름이 담긴 배열을 반환한다.
    // 정상이 아닐 경우 에러를 반환한다.
  }

  async getTryNumber() {
    //사용자로부터 시도 횟수를 입력받는다. (이때, 입력은 문자열임을 주의하자!)
    // isVaildTryNumber() 을 사용하여 정상적인 입력인지 확인한다.
  }

  isVaildCarName(names) {
    if (names.length < Minimum.CAR_NAME_NUMBER) {
      return [false, Messages.ERROR.SHORT_CAR_NAME_NUMBER, null];
    }
    if (names.length > Maximum.CAR_NAME_NUMBER) {
      return [false, Messages.ERROR.EXEED_CAR_NAME_NUMBER, null];
    }
    let carNames = {};
    for (let name of names) {
      if (carNames[name] === 0) {
        return [false, Messages.ERROR.DUPLICATION_CAR_NAME, null];
      }
      if (name.length < Minimum.CAR_NAME_LETTER) {
        return [false, Messages.ERROR.SHORT_CAR_NAME_LETTER, null];
      }
      if (name.length > Maximum.CAR_NAME_LETTER) {
        return [false, Messages.ERROR.EXCEED_CAR_NAME_LETTER, null];
      }
      carNames[name] = 0;
    }

    return [true, "", carNames];
  }

  isVaildTryNumber(number) {
    // 시도 횟수에 숫자가 아닌 글자를 입력했을 경우 false
    // 문자열(number)을 변수로 받아 검사한 후, 불린 값을 반환한다.
    // 숫자가 아닌 문자열인 이유는 Console.readLineAsync 으로 받은 값은 문자열이기 때문에..!
  }
}

export default UserInput;
