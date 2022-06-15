// const obj = {user: 'suad' , age:29 , address: {street: 'hotkovo' , number: 0, city:"Novi Pazar"}
// };

// const {user,age, address} = obj;
// const {street,number,city} = address;

// console.log(street);

// const array = [1,2,3,4,5];

// const [x,,,y] = [1,2,3,4,5];

// console.log(x,y);


class Car {
    constructor(type,price){
        this.type=type;
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
    getType(){
        return this.type
    }
    ToString(){
       return JSON.stringify(this);
    }
}

const car1 = new Car("BMW",20000);

console.log(car1);

car1.ToString();
console.log(car1.ToString());

