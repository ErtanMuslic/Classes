//var a=[1,,2,3,4,5,"2"];
// var b = [1,2,3,4[1,2,3,4[1,2,3,4[1,2,3,4]]]];

// console.log(array[4][4][4][2]);

// var array = [[['nesto'],['nesto 3']],[['nesto 4']['nesto 5']],['nesto']];

// var n = 10;
// for(var i =0;i<navigator;i++){

// }

// for(;1;){
//     console.log('ovo je infinite');
// } //Infinite loop

// var sum =0;

// for(var i =0;i<n;i++){
//     sum=sum+i;
// }

// console.log(sum);


// var array = [1,2,3,4,5,6];

// var n = 9;
// var found = false;

// for(var i =0;i<array.length;i++){
//     if(array[i]==n){
//         console.log("Broj n se nalazi na " + i + " mestu");
//         found=true;
//     }
// }

// if(!found){
//     console.log('-1');
// }

// var array = [10,2,3,4,5,6];

// var max=0;
// for(var i=0;i<array.length;i++){
//     if(array[i]>max){
//         max=array[i];
//     }
// }

// console.log("Najveci broj je broj " +max);

// var array = [10,2,3,4,5,6];
// var min=0;

// for(var i=0;i<array.length;i++){
//     if(min>array[i]){
//         min=array[i];
//     }
// }

// console.log(min);

// var array = [10,2,3,4,5,6];
// var min=0;
// var max=0;

// for(var i=0;i<array.length;i++){
//     if(min>array[i]){
//         min=array[i];
//     }
//     if(max<array[i]){
//         max=array[i];
//     }
// }

// console.log(min,max);


var array1 = ["a","b","c","d"];
var array2 = ["a","b","f"];
var array3=[];

for(var i=0;i<array1.length;i++){
    for(var j=0;j<array2.length;j++){
        if(array1[i]==array2[j]){
            array3.push(array1[i])
        }
    }
}
console.log(array3);
