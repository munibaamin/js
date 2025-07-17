// Switch Key // 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;  
//     default:
//         console.log("Default case match");
//         break;
// }

const month = "april"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("apr");
        break;  
    default:
        console.log("Default case match");
        break;
}

// arrow //
// const add = (a, b) => a+b 
//     console.log(add(1,4));

// this
let person = {
    name:"muniba",
    greet:function(){
        console.log("hello my name is" + this.name);
        
    }
}
person.greet()