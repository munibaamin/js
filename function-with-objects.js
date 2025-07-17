function calculateCartPrice(var1,var2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500,600));

const user = {
    username : "Muniba",
    price : 199
}

function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)  
handleObject({
    username:"sam",
    price : 299 
})

const myNewArray = [100,200,300,400]

function returnSecondValue (getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,300]));
