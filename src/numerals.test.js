const {convertToRoman} = require("./numerals")

describe("convertToRoman", () => {
  it("works for numbers 1-10", () => {
    const numberArray = Array(10).fill(0, 0, 10).map((_, index) => index + 1)
    const expectedResult = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
    expect(numberArray.map(convertToRoman)).toEqual(expectedResult)
  })

  it("works for other edge cases below 4000, like 90, 900, etc", () => {
    expect(convertToRoman(40)).toBe("XL")
    expect(convertToRoman(90)).toBe("XC")
    expect(convertToRoman(400)).toBe("CD")
    expect(convertToRoman(900)).toBe("CM")
    expect(convertToRoman(3999)).toBe("MMMCMXCIX")
  })

  it("works for 4000 using vinculum", () => {
    expect(convertToRoman(4000)).toBe("I\u0304V\u0304")
  })

  it("works for numbers 1000-10000", () => {
    const numberArray = Array(10).fill(0, 0, 10).map((_, index) => (index + 1) * 1000)
    const expectedResult = ["M", "MM", "MMM", "I\u0304V\u0304", "V\u0304", "V\u0304I\u0304", "V\u0304I\u0304I\u0304", "V\u0304I\u0304I\u0304I\u0304", "I\u0304X\u0304", "X\u0304"]
    expect(numberArray.map(convertToRoman)).toEqual(expectedResult)
  })
})