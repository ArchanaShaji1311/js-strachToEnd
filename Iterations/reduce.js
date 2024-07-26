// const myNums = [1,2,3]
// const myTotal =myNums.reduce( (acc,curr)=> {
//     console.log(`acc:${acc} and curr:${curr}`)
//     return acc + curr
// },0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "skirt",
        price : 799
    },
    {
        itemName : "shirt",
        price : 899
    },
    {
        itemName: "shoes",
        price: 1299
    },
]

const totalVal = shoppingCart.reduce((accu,currentVal)=>{
    return accu + currentVal.price
},0 )

console.log(totalVal)