import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe("The getCompletedTodos selector", () => {
  it("Return only completed todos", () => {
    const fakeTodos = [
      {
        text: "say Hi",
        isCompleted: true,
      },
      {
        text: "go cinema",
        isCompleted: false,
      },
      {
        text: "climb mount sss",
        isCompleted: false,
      },
    ];
    const expected = [
      {
        text: "say Hi",
        isCompleted: true,
      },
    ];
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected);
  });
});
