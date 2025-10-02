// Q1: Temperature Check
let temperature = 32;
if (temperature > 30) {
  console.log("Weather is Hot");
} else {
  console.log("Weather is Cool");
}

// Q2: Null type
let score = null;
console.log("Type of score:", typeof score); // object (JS bug)

// Q3: Change city
let city = "Karachi";
console.log("Before:", city);

city = "Lahore";
console.log("After:", city);
