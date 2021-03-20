// Kod 1:
console.log("Kod 1:");
let cars = ['volvo', 'saab', 'bmw', 'tesla'];  
for (let car in cars){
  console.log(cars[car]);
}

// Kod 2:
console.log("Kod 2:");

let fruitCars = {
  "cars": ['volvo', 'saab', 'bmw', 'tesla'],
  "fruits": ['apple', 'banana', 'orange']
};

for (let fruitCar in fruitCars){
 let arrays = fruitCars[fruitCar];
 for (let array in arrays){
   console.log(arrays[array]);
 };
};