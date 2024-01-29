/*
### Add or remove elements
1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output
*/

// 1. Declare an array of 3 tourist destinations
const touristDestinations = ['Paris', 'New York', 'Tokyo'];

// 2. Add a new tourist destination to your tourist array
touristDestinations.push('Barcelona');

// 3. Add two more to your array
touristDestinations.push('Sydney', 'Rome');

// 4. Remove the last tourist destination you have added
touristDestinations.pop();

// 5. Display the final array as output
console.log("Final Tourist Destinations Array:", touristDestinations);
