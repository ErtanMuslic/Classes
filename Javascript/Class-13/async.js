
console.log("hi 1");

const fn = () => {
    console.log("hi");
};
// setTimeout(fn, 0);
// setInterval(fn, 1000);  //Stopira se sa Ctrl+C

const id = setInterval(fn, 1000);

setTimeout(() => clearInterval(id), 5000); //Ispisuje "hi" 4 puta

console.log("hi 2");