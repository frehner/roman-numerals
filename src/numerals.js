function convertToRoman(inputNumber) {
  let currentNumber = inputNumber
  let romanNumber = ''

  numberData.forEach(numData => {
    const numberOfTimesUsed = Math.floor(currentNumber / numData.number)
    currentNumber -= numberOfTimesUsed * numData.number
    romanNumber += numData.roman.repeat(numberOfTimesUsed)
  })

  return romanNumber
}

const numberData = [
  {
    number: 4000,
    roman: "I\u0304V\u0304"
  },
  {
    number: 1000,
    roman: "M"
  },
  {
    number: 900,
    roman: "CM"
  },
  {
    number: 500,
    roman: "D"
  },
  {
    number: 400,
    roman: "CD"
  },
  {
    number: 100,
    roman: "C"
  },
  {
    number: 90,
    roman: "XC"
  },
  {
    number: 50,
    roman: "L"
  },
  {
    number: 40,
    roman: "XL"
  },
  {
    number: 10,
    roman: "X"
  },
  {
    number: 9,
    roman: "IX"
  },
  {
    number: 5,
    roman: "V"
  },
  {
    number: 4,
    roman: "IV",
  },
  {
    number: 1,
    roman: "I",
  },
]

module.exports = {
  convertToRoman
}
