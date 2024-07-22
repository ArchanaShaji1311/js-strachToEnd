const name = "Archana"
const age = 21
console.log(name + age)
// but it is not a good way to right
console.log(`Hello my name is ${name} and my age is ${age}`)

// The above way is called string  interpolation.

/* Another way of writing string */
const name1 = new String("Archana")
// String functions
console.log(name1.length)
console.log(name1.charAt(3))
console.log(name1.indexOf('a'))
console.log(name1.concat("Shaji"))
console.log(name1.endsWith('ana'))
console.log(name1.replace('ch', 'kh'))
console.log(name1.slice(0,4))
console.log(name1.slice(-6,4))