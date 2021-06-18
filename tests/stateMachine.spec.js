const stateMachine = require("../src/stateMachine.js");
describe("StateMachine", () => {
  it("hi abc ", () => {
    const str = "hi abc hahaha abc";
    const result = stateMachine(str);
    expect(result).toEqual([
      {
        start: 3,
        end: 5,
      },
      {
        start: 14,
        end: 16,
      },
    ]);
  });

  //   it("abababd ", () => {
  //     const str = "abababd";
  //     const result = stateMachine(str);
  //     expect(result).toEqual({
  //       start: 2,
  //       end: 6,
  //     });
  //   });
});
