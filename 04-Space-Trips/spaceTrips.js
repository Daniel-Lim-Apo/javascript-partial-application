// 1. Define the General Function
function calculateSpaceTripCost(
  destination,
  duration,
  passengers,
  baseCostPerDay,
  costPerPassenger
) {
  return (
    baseCostPerDay * duration +
    costPerPassenger * passengers +
    (destination === "Mars" ? 5000 : 1000)
  );
}

// 2. Create a Partial Application Utility
function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

// 3. Partially Apply the Function
const baseCostPerDay = 1000;
const costPerPassenger = 200;

const calculateMarsTripCost = partial(
  calculateSpaceTripCost,
  "Mars",
  baseCostPerDay,
  costPerPassenger
);
const calculateMoonTripCost = partial(
  calculateSpaceTripCost,
  "Moon",
  baseCostPerDay,
  costPerPassenger
);

// 4. Use the Partially Applied Functions
const marsTripCost = calculateMarsTripCost(5, 4); // 5 days, 4 passengers
const moonTripCost = calculateMoonTripCost(3, 2); // 3 days, 2 passengers

console.log(`Cost of Mars Trip: $${marsTripCost}`);
console.log(`Cost of Moon Trip: $${moonTripCost}`);
