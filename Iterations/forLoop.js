for(let i=0;i<10;i++)
{
    console.log("Print it")
}

const nums = [10,20,30,40]
for(let i=0;i<nums.length;i++)
{
    const element = nums[i]
    console.log(element)

    console.log(nums[i])

}

// Nested loop
for(let i=0;i<10;i++)
{
    console.log(`Outer loop : ${i}`)
    for(let j=0;j<10;j++)
    {
        console.log(`Inner loop : ${j}`)
    }
}

//Break and continue with loop
for(let i=0;i<10;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(i)
} 

//Continue
for(let i=0;i<10;i++)
{
    if(i==5)
    {
        continue;
    }
    console.log(i)
} 

