import * as React from "react";
import NUMBER_METHODS from "../helper";

describe("Testing helper file", () => {
  /**sum function test cases */
  it("Sum of two integers", () => {
    let result = NUMBER_METHODS.sum(1, 2);
    expect(result).toBe(3);
  });

  /** diff function test cases */
  it("Difference of two integers", () => {
    let result = NUMBER_METHODS.diff(10, 5);
    expect(result).toBe(5);
  });

  /** multi function test cases */
  it("Multiplication of two integers", () => {
    let result = NUMBER_METHODS.multi(2, 3);
    expect(result).toBe(6);
  });
});
