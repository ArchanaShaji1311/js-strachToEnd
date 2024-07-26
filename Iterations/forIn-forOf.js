// for of loop
//In array
const arr =[1,2,3,4,5]
for (const i of arr) {
    console.log(i) 
}

//On string
const name = "Archana"
for(const char of name)
{
    console.log(`Character of name is : ${char}`);
}

//With map
const map = new Map();
map.set('MP','Bhopal')
map.set('UP','Lucknow')
map.set('Assam','Dispur')
// console.log(map)

for(const [states,capital] of map)
{
    console.log(states,'=>',capital)
}

const myBrand = {
    shoes : "skechers",
    clothes : "zara",
    accessories:"chanel"

}
//(for of) does not work here
// for(const [material,brand] of  )
// {
//     console.log(material)
// }


//(for in) works with object 
const myObject = {
    fruit : "Apple",
    vegetable : "Potato"
}

for(const key in myObject)
{
    console.log(`one ${key} type is ${myObject[key]}`)
}