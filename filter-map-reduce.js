// const coding = ["java","python","c++","ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item // undefined
// })

// // console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNums.filter( (num) => {
// //     return num > 4
// // })
// // console.log(newNums);


// // const newNums = []
// // myNums.forEach( (num) => {
// //     if (num > 4) {
// //         newNums.push(num)
// //     }
// // })
// // console.log(newNums);


// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
// ];
 
// let userBooks = books.filter( (bk) => bk.genre === 'History')
// userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')
// console.log(userBooks);


// const myNumbers = [1,2,3,4,4,5,6,7,8,]
// const newNums = myNums.map( (num) => {return num + 10})
// // console.log(newNums);

// let myarr = ["ffff","ffff"]
// myarr.forEach ((arr) => {
//   // console.log(`my array is:${myarr}` );
  
// })

// let a = "mdmmm"
// for (const arr of a) {
//   // console.log(arr);
// }

// let mynum = ["muniba","kiwi"]
// for (const newnum of mynum) {
//   // console.log(newnum);
// }

// let obj = {
//   name:"muniba",
//   age :19,
//   laguage:"js"
// }

// for (let key in obj) {
//   // console.log(key + ":"+ obj[key]);
  
// }

// let myOldBooks = [
//   {fairytale:"fairytopia", magic:"cindrella"},
//   {horror:"beast", frozen:"snow"}
// ] 
// let newBooks = myOldBooks.filter(bo => bo.magic === "cindrella");
// // console.log(newBooks);

// let numbers = [ 90,89,70];
//  let newNumbers = numbers
//                   .map(n => n * 2)
//                   .map(n => n + 3)
//                   .filter(n => n >= 40);
                  
//  console.log(newNumbers);
 
// Reduce //
// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,cur) {
//   console.log(`acc:${acc} and cur:${cur}`);
  
//   return acc + cur
// }, 0)

// console.log(myTotal);


// const myNums = [1,3,4,5,6,7,8,9]
// const myTotal = myNums.reduce((acc,cur) => acc+cur,0)
// console.log(myTotal);

// const shopingCart = [
//   {
//     itemName : "js course",
//     price : "5999"
//   },
//    {
//     itemName : "py course",
//     price : "6999"
//   },
//   {
//     itemName : "c++ course",
//     price : "7999"
//   }
// ]

// const priceToPay = shopingCart.reduce((acc,item) => acc + item.price, 0)
// console.log(priceToPay);


// const name = [1,2,3,4,5,6,7,8,9]
// let  evens = name.filter( num => num < 4 )
// console.log(evens);

const name = [1,2,3,4,5,6,7,8,9]
let  evens = name.map( num => num * 4 )
console.log(evens);

