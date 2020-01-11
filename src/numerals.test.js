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
    expect(convertToRoman(3999)).toBe("I\u0304I\u0304I\u0304CMXCIX")
  })

  it("works for 4000 using vinculum", () => {
    expect(convertToRoman(4000)).toBe("I\u0304V\u0304")
  })

  it("works for numbers 1,000-10,000", () => {
    const numberArray = Array(10).fill(0, 0, 10).map((_, index) => (index + 1) * 1000)
    const expectedResult = ["I\u0304", "I\u0304I\u0304", "I\u0304I\u0304I\u0304", "I\u0304V\u0304", "V\u0304", "V\u0304I\u0304", "V\u0304I\u0304I\u0304", "V\u0304I\u0304I\u0304I\u0304", "I\u0304X\u0304", "X\u0304"]
    expect(numberArray.map(convertToRoman)).toEqual(expectedResult)
  })

  it("works for numbers 1,000,000-10,000,000", () => {
    const numberArray = Array(10).fill(0, 0, 10).map((_, index) => (index + 1) * 1000 * 1000)
    const expectedResult = ["I\u033F", "I\u033FI\u033F", "I\u033FI\u033FI\u033F", "I\u033FV\u033F", "V\u033F", "V\u033FI\u033F", "V\u033FI\u033FI\u033F", "V\u033FI\u033FI\u033FI\u033F", "I\u033FX\u033F", "X\u033F"]
    expect(numberArray.map(convertToRoman)).toEqual(expectedResult)
  })

  it("works for 1,000,000,000", () => {
    expect(convertToRoman(1000000000)).toBe("M\u033F")
  })

  it("works for 1, 2, and 3 billion", () => {
    const numberArray = Array(3).fill(0, 0, 3).map((_, index) => (index + 1) * 1000 * 1000 * 1000)
    const expectedResult = ["M\u033F", "M\u033FM\u033F", "M\u033FM\u033FM\u033F",]
    expect(numberArray.map(convertToRoman)).toEqual(expectedResult)
  })

  it("works for 3,999,999,999", () => {
    expect(convertToRoman(3999999999)).toBe("M\u033FM\u033FM\u033FC\u033FM\u033FX\u033FC\u033FI\u033FX\u033FC\u0304M\u0304X\u0304C\u0304I\u0304X\u0304CMXCIX")
  })

  describe("input validation", () => {
    it("throws when a 0 is given", () => {
      expect(() => convertToRoman(0)).toThrow()
    })

    it("throws when a negative number is given", () => {
      expect(() => convertToRoman(-5)).toThrow()
    })

    it("throws when a number larger than 4 billion is given", () => {
      expect(() => convertToRoman(4000000000)).toThrow()
    })

    it("throws when something other than a number is given", () => {
      expect(() => convertToRoman("1")).toThrow()
    })
  })
})