// Get the values from the page
function getValues() {
   // Get values from the page
   let startValue = document.getElementById("startValue").value;
   let endValue = document.getElementById("endValue").value;

   // Cast into integer
   startValue = parseInt(startValue);
   endValue = parseInt(endValue);

   // Conditional Statement
   // Validate input 
   if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
      // Call generateNumbers()
      let numbers = generateNumbers(startValue, endValue);

      // Call displayNumbers()
      displayNumbers(numbers);
   } else {
      alert("You must enter integers");
   }
}

// Generate numbers from startValue to the endValue
function generateNumbers(startValue, endValue) {
   let numbers = [];

   // Get all numbers from start to end
   for (let index = startValue; index <= endValue; index++) {
      numbers.push(index);
   }

   return numbers;
}

// Display the numbers and mark the even numbers bold
function displayNumbers(numbers) {
   let templateRows = "";

   for (let index = 0; index < numbers.length; index++) {
      let className = "even";
      let number = numbers[index];

      // Check if number is even
      if (number % 2 == 0) {
         className = "even";
      } else {
         className = "odd";
      }

      templateRows += `<tr><td class="${className}">${number}</td></tr>`
   }

   document.getElementById("results").innerHTML = templateRows
}