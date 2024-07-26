const fruits = ["apple","mango","grapes","banana","lichi"]
fruits.forEach(function (val){
    console.log(val)
})

//With arrow function

const vege = ["potato","tomato","onion","chilli"]
vege.forEach((item)=>{
   console.log(item)
})


//Another way

const flavour = ["chocolate","vanilla","strawberry"]
function print (val1)
{
    console.log(val1)
}
flavour.forEach(print)


//filter can be used to apply multiple conditional fetch
const nums =[10,20,30,40,50,60]
let newNums = nums.filter( (val) =>{
    return val>30 
})
console.log(newNums)

// filter only return values based on true/false
const myNum =[1,2,3,4,5,6,7,8,9]
const newmynum = myNum.filter( (val)=>{
    return val+10
} )
console.log(newmynum)

//To perform various operation we use map
const mapNum = myNum.map( (value)=>{
    return value+10
} )
console.log(mapNum)

myNum.forEach( (item)=>{
    console.log(item + 10)
} )



