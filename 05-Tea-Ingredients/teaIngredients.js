// Define the Base Function
function makeTea(type, sugar, milk, water) {
  return `Making a cup of ${type} tea with ${sugar} spoon(s) of sugar, ${
    milk ? "milk" : "no milk"
  }, and ${water}ml of water.`;
}

// Create a Partial Application Function
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

// Use the Partially Applied Function
const makeBlackTea = partial(makeTea, "black tea");
const makeGreenTea = partial(makeTea, "green tea");

// Making specific types of tea
console.log(makeBlackTea(2, true, 250)); // Making a cup of black tea with 2 spoon(s) of sugar, milk, and 250ml of water.
console.log(makeGreenTea(1, false, 300)); // Making a cup of green tea with 1 spoon(s) of sugar, no milk, and 300ml of water.
