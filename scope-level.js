function one (){
    const username = "Muniba"

    function two () {
        const age = 12
        // console.log(username);
        
    }
    // console.log(age);

    two()
}
one()

if (true) {
    const username = "Muniba"
    if (true) {
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


/*********************Intresting*************************/ 
console.log(allone(7));
function allone(num){
    return num + 1
}
// allone(7)

// console.log(alltwo(9));
const alltwo = function (num) {
    return num + 8
}

console.log(three(4)); // Output: undefined
function three(num){
    return num + 9
}

function four(name){
    return name + "muniba"
    
}
console.log(four("amin"));