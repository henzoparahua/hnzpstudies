// Int and float are same in js.
const weight = 1.0;
const weight2 = Number('2.0')

console.log(Number.isInteger(weight))
console.log(Number.isInteger(weight2))

const suco = 93.231
const suco2 = 312.31

const total = suco + suco2 + weight + weight2
const media = total / (weight + weight2)

console.log(media.toFixed(2))
console.log(typeof(media))
console.log(Number.isInteger(media))
console.log(typeof(Number))
console.log(typeof(Number.isInteger))