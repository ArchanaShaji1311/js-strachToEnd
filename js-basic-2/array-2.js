const myArray = new Array(12,13,14,15)

const myArray2 = new Array(22,23,24,25)
console.log(myArray)
const pushedArr = myArray.push(myArray2)
console.log(pushedArr) // --> push function return the length of new array and add the pushed element at end
console.log(myArray) //--> the whole array get itself pushed not the elements seperately

const concatArray = myArray.concat(myArray2)
console.log(concatArray) //--> it returns a new array after combining two arrays

// Spreading array--> can combine more than two arrays
const newArray = [...myArray,...myArray2]
console.log(newArray)

const mixedArray = [1,2,3,[4,5] , 6 , [7,8,[9,10]]]

const flatArray = mixedArray.flat(Infinity)
console.log(flatArray)

// More methods
console.log(Array.isArray("Archana")) //check whether its array or not

console.log(Array.from("Archana")) // converted to array

console.log(Array.from({name:"Archana"})) //we have to define whether array should be created from value or key

let age1 = 20 
let age2 = 22
let age3 = 23
console.log(Array.of(age1,age2,age3))