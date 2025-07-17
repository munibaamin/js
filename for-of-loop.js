// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// maps //
// const map = new Map()
// map.set('PAK',"Pakistan")
// map.set('USA',"United State of America")
// map.set('Fr',"France")

// console.log(map);

// for (const [key,value] of map) {
    // console.log(key,":",value);
// }


// for in //

const myObject = {
    game1 : "nfs",
    game2 : "spiderman"
}
for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const programming = ["py","c++","java"]
for (const key in programming) {
//    console.log(programming[key]);
}

const map = new Map()
map.set('PAK',"Pakistan")
map.set('USA',"United State of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(map[key]);
    
} // this is not possible because map is not iterable

// for each //
const coding = ["js","ruby","java","python"]
coding.forEach (function (item) {
    // console.log(item);
})

coding.forEach( (item) => {
    // console.log(item); 
})

function printME(item){
    console.log(item);
}
// coding.forEach(printME)

coding.forEach ( (item,index,arr) => {
    console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "javascript",
        languageFileName : "js"
    }, 
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "javascript",
        languageFileName : "js"
    }
]
myCoding.forEach ( (item) => {
    console.log(item.languageFileName);
    
})