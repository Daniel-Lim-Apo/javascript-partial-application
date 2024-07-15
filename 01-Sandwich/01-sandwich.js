// Example with Currying and Partial Application
const makeSandwich =
  (bread) => (protein) => (cheese) => (vegetables) => (condiments) =>
    `Sandwich with ${bread}, ${protein}, ${cheese}, ${vegetables}, and ${condiments}`;

const makeTurkeySandwich = makeSandwich("whole grain")("turkey");
const turkeyWithCheddar = makeTurkeySandwich("cheddar");
const turkeyCheddarWithVeggies = turkeyWithCheddar("lettuce and tomato");
const finalSandwich = turkeyCheddarWithVeggies("mustard");

console.log(finalSandwich);
