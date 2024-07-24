const user ={
    username:"Archana",
    age:21,
    welcomeMessage: function()
    {
        console.log(`${this.username} , welcome to this page `)
    }
}
console.log(user)
user.welcomeMessage()
user.username = "Athira"
user.welcomeMessage()


//Since this keyword can only be used with objects
function test()
{
    const username = "Archana"
    console.log(this.username)
}
test()

//Arrow function

const arrowTest = ()=>{
     let userName = "Alia"
    console.log(this.userName)
}
arrowTest()

//Arrow fuction syntex
 const fucnName = (para1,para2)=>{}

 //Implicit return in arrow fuction--> no need to write return keyword here
 const addtwo = (para1,para2) => (para1+para2)
