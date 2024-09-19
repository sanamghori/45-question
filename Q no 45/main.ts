
/*Question no 45
Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name.
 It should then accept an arbitrary number of keyword arguments. 
 Call the function with the required information and two other 
 name-value pairs, such as a color or an optional feature. Print 
 the Object that’s returned to make sure all the information was stored correctly.*/

 

function cardetail(manufacturer:string,model:string,...additionalInfo:{
    [key:string]:any}[]):object{
        const cardetail ={
            manufacturer,
            model,
            ...additionalInfo.reduce((acc,item)=>({...acc,...item}),{})
        };
        return cardetail;}
    const carObjects=cardetail("parado","landcruser",{color:"red"},
{
    optionalfeature:"sunroof"
});
    
console.log(carObjects);
