
// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 1000;
//     setTimeout(() => {
//         if(random > 500){
//             resolve(random);
//         }
//         else{
//             reject(random);
//         }
//         resolve(random)
//     }, random);   
// });

// promise
// .then((value) => console.log("resolve",value))
// .catch((value) => console.log("reject",value))
// .finally(() => console.log("finally"));


// fetch('https://api.quotable.io/random').then(response => {
//     return response.json();
// }).then((result) => {
//     console.log(result);
// });


// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 1000;
//     setTimeout(() => {
//         if(random > 500){
//             resolve(random);
//         }
//         else{
//             reject(random);
//         }
//     }, random);   
// });




// const promise = new Promise((resolve, reject) => {
//     const random = Math.random() * 1000;
//     setTimeout(() => {
//         if(random > 500){
//             resolve(random);
//         }
//         else{
//             reject(random);
//         }
//         resolve(random)
//     }, random);   
// });


// const promise2 = async () => {
//     console.log("pocetak");
//     const RandomNumber = await promise;
//     console.log(RandomNumber);
//     const random2 = await promise;
//     console.log(random2);
//     const random3 = await promise;
//     console.log(random3);
//     const random4 = await promise;
//     console.log(random4);
//     const random5 = await promise;
//     console.log(random4);
// };

// promise2().then((value) => console.log(value));
// console.log("main function");


Promise.then(() =>{
    new Promise().then(() =>{
        new Promise().then((value) => value);
    });
});

Promise.all([promise,promise]); //Array with Promises
Promise.race([]);   //Vise asinhronih radnji i vraca samo radnju koja se prva zavrsila
Promise.allSettled([]); //slican prvom primeru