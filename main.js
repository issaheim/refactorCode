// ------------- Kod 1 -------------
let cars = ['volvo', 'saab', 'bmw', 'tesla']; 

for (const car in cars){
  console.log("Kod 1: ", cars[car]);
}

// ------------- Kod 2 -------------
let cars2 = ['volvo', 'saab', 'bmw', 'tesla'];
let fruits = ['apple', 'banana', 'orange'];

loopList(cars2);
loopList(fruits);

function loopList (list){
  list.forEach(element => console.log("Kod 2: ", element));
};

// ------------- Kod 3 -------------
let flowers = ['rose', 'tulip', 'lily', 'orchid'];  

function logLoop (list){
  list.forEach(element => console.log("Kod 3: ", element));
};

logLoop(flowers);
