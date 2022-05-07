const outer = (a) => {
    return (b) => {
        return a + b;
    };
};

const inner = outer(10);

console.log(inner(20));
console.log(inner(40));
console.log(outer(10)(20));

const a = (array) => {
    return () => {
        if(array.lenght < 0){
            return "Array is empty";
        }
        else{
            return "Array is not empty";
        }
    };
};

let array1=[123,23,22,3];
let array2 =[];
let isEmpty = a(array1);
let isEmpty2 = a(array2);
console.log(isEmpty());
console.log(isEmpty2());
