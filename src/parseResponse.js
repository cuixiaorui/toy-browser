// TODO 写 body 的实现
module.exports = () => {
  let result = [];
  let n = 0;
  let line = "";

  function waitForR(c) {
    startIndex = n;
    ++n;
    if (c === "\r") {
      return waitForN;
    }

    return waitForR;
  }

  function waitForN(c) {
    endIndex = n;
    ++n;
    if (c === "\n") {
      return end;
    }

    return waitForR;
  }

  function end() {
    return end;
  }

  let currentState = waitForR;

  function receive(data) {
    _receive(data);
  }

  function _receive(data) {
    for (const c of data.slice("")) {
      line += c;
      let nextState = currentState(c);
      currentState = nextState;

      if (currentState === end) {
        result.push(line.replace(/\s/g, ""));
        line = "";

        // 在继续找
        currentState = waitForR;
      }
    }
  }

  function finish(data) {
    if (data) _receive(data);
    return result;
  }

  return {
    finish,
    receive,
  };
};
