// var sum = 0;
// var n = 20;
// for(let i = 0; i < n ; i++){
//     sum+=i;
// }

// console.log(sum);

// function sumof(n) {
//     var s=0;
//     for(let i = 1;i<=n;i++){
//         s+=i;
//     }
//     return s;
// }

// function sumR(n) {
//     var sum = 0;
//     if(n === 1){
//         return 1;
//     }

//     sum = n + sumR(n-1); 
//     return sum;
// }

// console.log(sumR(10));

// function ProductR(n) {
//     var sum = 1;
//     if(n === 1){
//         return 1;
//     }

//     sum = n * ProductR(n-1); 
//     return sum;
// }

// console.log(ProductR(10));





// function countdown(n){
//     if(n === 1){
//         return 1;
//     }
//     var string=`${n} ${countdown(n-1)}`;
//     return string;
// }



function countdown(n){
    if(n === 1){
        return [1];
    }
    var array=[n,...countdown(n-1)];

    return array;
}


console.log(countdown(4));




// function range(a,b){
//     var n = a;
//     if(n === b){
//         return b;
//     }
//     var string=`${n} ${range(n+1,b)}`;
//     return string;
// }

// console.log(range(2,5));



