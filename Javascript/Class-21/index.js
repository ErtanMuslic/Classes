//let,const i var
// truthy vs falsy
// functions and callbacks
// scope and this
// hoisting
// promises
// async and await
// closure



// let a;
// const b = 0;
// var c;

// function name(params){
//     let a;
// }

// function name(params) {
//     let b;
// }

// function name(params) {
//     const array = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//     console.log(element0)
//     var element0 = array[i]; //var zauzima jedan blok u memoriji i moze da se koristi 
//     const element1 = array[i]; //const se izvrsava samo u jednoj iteraciji.Svaka vrednost ima svoj blok
//                                //u ovom slucaju program izbacuje error
    
// }
// }



//callbacks


// function name(a) {
//     return a; //vraca argument koji je unesen
// }

// function name2(callbacks) {
//     return callbacks(); //vraca rezultat callback funkcije
// }


//this



// console.log(this);

// const d = {
//  name3: function (){
//     console.log(this);
// },
// name5:() =>{
//     console.log(this);
// }
// };

// function name4(){
//     console.log(this);
// }

// name4();
// d.name3();


//promises //sta je 
//koja stanja postoje:
//pending 
//fullfiled
//rejected
