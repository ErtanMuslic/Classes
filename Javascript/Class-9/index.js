// for (let index = 0; index < 10; index++) {
//     console.log(a);
//     var a = 10;
// }

// const a = [20];
// a.push(20);

// console.log(a);

// let b = 20;

// function removeCharacter(title = "", character) {
//    return title.replace(character,"");
// }

// console.log(removeCharacter("Irfan je c",'c'));


// function removeCharacter(title = '', character) {
//     return title.replace(character,"");
//  }
 
//  console.log(removeCharacter());



//  () => {}

//  const fn =() =>{}



//  const removeCharacter2(title = "", character) => {
//     return title.replace(character,"");
//  }
 
//  console.log(removeCharacter2());


// let array1 = [1,2,34,5,6,7];
// const array2 = array1;


// array2 = []

// console.log(array1,array2);




// let o1 = {};
// const o2 = o1;

// o2.name="name";

// console.log(o1,o2);



// let array1 = [1,2,34,5,6,7];
// const array2 = [...array1];


// array2.push("s");

// console.log(array1,array2);


// let array1 = {name:"suad"};
// const array2 = {...array1};


// array2.name="irfan";

// console.log(array1,array2);

function charsToString(...args) {
    let sum='';
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        sum+=element;
    }
    return sum;
}
console.log(charsToString(1,2,3,4,5,"23","23","2"));


// const sum = (...args) => {
//     let tempSum = 0;
//     for (let index = 0; index < args.length; index++) {
//         const element = args[index];
//         tempSum+=element;      
//     }
//     return tempSum;
// };

// console.log(sum(1,2,3,4,5,6,"s"));


// const sum = (...args) => {
//     let tempSum = 0;
//     for (let index = 0; index < args.length; index++) {
//         const element = args[index];

//     if(typeof (element) === "number"){
//         tempSum +=element;

//     }

//     if(typeof (element) === "string"){
//         tempSum += parseInt(element);

//     }

//     return tempSum;
// }
// };

// console.log(sum(1,2,3,4,5,6,"s"));