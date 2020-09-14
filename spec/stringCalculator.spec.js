var calculator = require("../src/stringCalculator");

describe("String calculator should return zero when '' is passed", function () {
  it(" String calculator should return equal to zero", function () {
    expect(calculator.add("")).toBe(0);
  });

  it("String calculator should return equal  to one", function () {
    expect(calculator.add("1")).toEqual(1);
  });

  it("String calculator should return equal 3", function () {
    expect(calculator.add("1,2")).toEqual(3);
  });

  it("String calculator should separate numbers with \\n", function () {
    expect(calculator.add("1\n2\n3")).toEqual(6);
  });

  it("String calculator should ignore numbers greater or equal to 1000", () => {
    expect(calculator.add("1000,1")).toEqual(1);
  });

  it("String calculator should have multiple delimiter of length > 1", function () {
    expect(calculator.add("//[***]\n1***2***3")).toEqual(6);
  });

  it("String calculator should have more than one separators, which can be defined", function () {
    expect(calculator.add("//[*][%]\n1*2%3")).toEqual(6);
  });

  it("should handle invalid input.", function () {
    expect(calculator.add("//;\n1000;1;2;")).toThrowError;
  });

  it("should handle invalid input.", function () {
    expect(calculator.add("1,2,3//;\n1000,1;2")).toThrowError;
  });

  it("should handle invalid input.", function () {
    expect(calculator.add("   //;\n1000,1;2")).toThrowError;
  });
});
