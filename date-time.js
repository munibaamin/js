const myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,9)
// let myCreatedDate = new Date(2025, 0, 9, 5 ,3)
// let myCreatedDate = new Date("01-09-2025") dd mm yy
let myCreatedDate = new Date("01-09-2025") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
 
// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday:"long"
})




