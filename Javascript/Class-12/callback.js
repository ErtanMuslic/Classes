const logger = (value) =>{
    console.log(value);
};

const sum =(a, b, callback) => {
    if(callback){
        callback(a+b);}
    return a + b;
};

sum(10, 20, logger);
sum(10, 20, logger);
sum(10, 20, logger);
sum(10, 20, logger);
sum(10, 20, logger);
sum(10, 20, (value) => { console.log(value);})