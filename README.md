# Roman Numerals
Simple API for converting numbers into roman numerals, in the range of 1 to 3,999,999,999 inclusive, using [vinculums](#roman-numeral-specification) for large numbers.

Endpoint can be called by [starting the server](#how-to-run) and then calling the enpoint at `http://localhost:8080/romannumeral?query=` and putting your number at the end.

## How to run
1. `npm i`
1. `npm start`

## How to test
1. `npm i`
1. `npm test`

## Roman Numeral Specification
Use of single and double vinculums for larger numbers. For example
* I\u0304 (I single vinculum, or an I with a single bar over it) is used for one thousand (1,000)
* I\u033F (I double vinculum, or an I with a single bar over it) is used for one million (1,000,000)
* M\u033F (M double vinculum, or an M with two bars over it) is used for one billion (1,000,000,000)

I vinculum is preferred over M when possible, e.g. 1000 -> I\u0304

### Sources for spec
* [Data on vinculum and double vinculum](https://www.mytecbits.com/tools/mathematics/roman-numerals-converter#aSimple)
* [Data on Roman numerals and vinculum](https://en.wikipedia.org/wiki/Roman_numerals#Vinculum)
* [Data on Roman numerals and vinculum](http://mathworld.wolfram.com/RomanNumerals.html)

## Built with:
* Jest for unit testing
* Hapi for API endpoint
* Nodemon for API development
* Love