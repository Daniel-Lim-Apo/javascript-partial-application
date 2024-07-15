// General function to calculate performance
function calculatePerformance(sport, distance, time, age) {
  if (sport === "running") {
    return distance / time - age / 100;
  } else if (sport === "swimming") {
    return distance / (time * 1.1) - age / 120;
  } else if (sport === "cycling") {
    return distance / (time * 0.9) - age / 110;
  }
  return 0;
}

// Utility function for partial application
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

// Specialized functions for different sports using partial application
const calculateRunningPerformance = partial(calculatePerformance, "running");
const calculateSwimmingPerformance = partial(calculatePerformance, "swimming");
const calculateCyclingPerformance = partial(calculatePerformance, "cycling");

// Usage examples
const runningPerformance = calculateRunningPerformance(10000, 3600, 25); // 10 km run in 1 hour by a 25-year-old
const swimmingPerformance = calculateSwimmingPerformance(1000, 1800, 22); // 1 km swim in 30 minutes by a 22-year-old
const cyclingPerformance = calculateCyclingPerformance(20000, 5400, 30); // 20 km cycling in 1.5 hours by a 30-year-old

console.log(`Running Performance: ${runningPerformance}`);
console.log(`Swimming Performance: ${swimmingPerformance}`);
console.log(`Cycling Performance: ${cyclingPerformance}`);
