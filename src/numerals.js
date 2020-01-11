function convertToRoman(inputNumber) {
  // error handling
  if(typeof inputNumber !== "number") throw new Error(`Input not correct; number expected but received a ${typeof inputNumber}: ${inputNumber}`)
  if(Number.isNaN(inputNumber)) throw new Error(`Input not correct; number expected but received NaN`)
  if(inputNumber <= 0) throw new Error(`Input not correct; cannot be below 1. Received ${inputNumber}`)
  if(inputNumber >= 4000000000) throw new Error(`Input not correct; cannot be above or equal to 4 billion. Received ${inputNumber}`)
  if(inputNumber % 1 > 0) throw new Error(`Input not correct; number is not a whole number. Received ${inputNumber}`)

  let currentNumber = inputNumber
  let romanNumber = ""

  // 1000 * 1000 size numbers have a double vinculum
  const doubleVinculum = Math.floor(currentNumber / 1000 / 1000)
  if(doubleVinculum) {
    generateRomanFromNumber({vinculumAddition: "\u033F", multiplier: 1000*1000})
  }

  // 1000 sized numbers have a single vinculum
  const singleVinculum = Math.floor(currentNumber / 1000)
  if(singleVinculum) {
    generateRomanFromNumber({vinculumAddition: "\u0304", multiplier: 1000})
  }

  generateRomanFromNumber()

  function generateRomanFromNumber({vinculumAddition="", multiplier=1} = {}) {
    numberData.forEach(numData => {
      // multiplier could be 1000 or 1000 * 1000 depending on the vinculum needed
      const arabicNumberWithMultiplier = numData.number * multiplier

      const numberOfTimesUsed = Math.floor(currentNumber / arabicNumberWithMultiplier)
      currentNumber -= numberOfTimesUsed * arabicNumberWithMultiplier

      // go over each character in the roman numbers and add the vinculum unicode to it (if necessary)
      const romanNumbersWithVinculumAddition = numData.roman.split("").map(char => char + vinculumAddition).join("")
      romanNumber += romanNumbersWithVinculumAddition.repeat(numberOfTimesUsed)
    })
  }

  return romanNumber
}

const numberData = [
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
