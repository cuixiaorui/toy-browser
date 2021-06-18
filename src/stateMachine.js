// 动态生成下面的状态函数
module.exports = (string) => {
  let result = [];
  let startIndex = 0;
  let endIndex = 0;
  let n = 0;

  function waitForA(c) {
    startIndex = n;
    ++n;
    if (c === "a") {
      // 继续看看下一个字符是不是b
      return waitForB;
    }

    return waitForA;
  }

  function waitForB(c) {
    ++n;
    if (c === "b") {
      // 继续看看下一个字符是不是 c
      // 或者看看下一个状态是不是 d
      return waitForCOrD;
    }

    // 如果不是 b 的话，那么继续去检查 a
    return waitForA;
  }
  function waitForCOrD(c) {
    endIndex = n;
    ++n;

    if (c === "c" || c === "d") {
      return end;
    }

    // 如果不是 c 的话，那么继续去检查 a
    return waitForA;
  }

  function end() {
    return end;
  }

  let currentState = waitForA;
  for (const c of string.slice("")) {
    let nextState = currentState(c);
    currentState = nextState;

    if (currentState === end) {
      result.push({
        start: startIndex,
        end: endIndex,
      });

      // 在继续找
      currentState = waitForA;
    }
  }

  //   if (currentState === end) {
  //     //     return {
  //     //       start: startIndex,
  //     //       end: endIndex,
  //     //     };
  //     return result;
  //   } else {
  //     return null;
  //   }
  return result;
};
