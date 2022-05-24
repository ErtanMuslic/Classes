const array= [
{  id:1, name: "Ertan" , adress: {street: 'Trnava bb',number:22} },
{  id:2, name: "Ramiz", adress: {street: 'Prvog maja',number:25}},
{  id:3, name: "Suad" ,adress: {street: 'Potok',number:42}},
{  id:4, name: "Mirza" ,adress: {street: 'Bukres',number:31}},
{  id:5, name: "Ahmed" ,adress: {street: 'Rifata budzovica',number:16}},
{  id:6, name: "Mejla" ,adress: {street: 'Hercegovacka',number:77}},
{  id:7, name: "Ajsa" ,adress: {street: 'Potok 2',number:88}},
];

// const newArray = array.map((value,index) => {
//     return value.adress;
// });

// const newArray = array
// .filter((value)=> value.name[0]==="S")
// .map((value)=> value.name);

// const newArray = array
// .filter((value) => value.adress.number > 25).map((value) => value.adress)
// console.log(newArray);


// Array.prototype.newMap = function(callback) {
//     let arr =[];
//     for (let i = 0; i < this.length; i++) {
//         const element = this[i];
//         arr.push(callback(element,i,this));
//     }
//     console.log(arr);
//     return arr;
// };
// [1,2,3].newMap(()=>{});
// [3,"sd"].newMap(()=>{});

// const newArray = array
// .filter((value)=> value.name[0]==="S")
// .map((value)=> value.name);

const newArray2 = array.reduce((result,value,index,array) => {
    if (value.adress.number > 25) {
        result.push(value.adress);
    }
    return result;
},[]);

console.log(newArray2);