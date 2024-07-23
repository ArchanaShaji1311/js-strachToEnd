// const instaUser = new Object()
// console.log(instaUser)
// the above defined method is example of singleton object

// instaUser.id = "abc@1311"
// instaUser.name = "alexia"
// instaUser.isLoggedIn = false
// console.log(instaUser)

//Nested Objects
// const regularUser = {
//     fullname: {
//         userfullname:{
//             firstname:"Archana",
//             lastname : "Shaji"
//         }

//     }
    
// }
// console.log(regularUser.fullname.userfullname.firstname)

// combining objects
// const obj1 ={1:"a",2:"b"}
// const obj2={7:"c",8:"d"}
//  const obj3 = Object.assign({} , obj1,obj2)
//  console.log(obj3)

//another way is spreading
//  const obj4 = {...obj1,...obj2}
//  console.log(obj4)

// some others methods
// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))
// console.log(Object.getOwnPropertyNames(instaUser))
// console.log(instaUser.hasOwnProperty("isLoggedIn"))

const foodDel = {
    deliverID : "123@123",
    deliverName :"Alex"
}
//destructoring
const {deliverName:name} = foodDel
console.log(name)

