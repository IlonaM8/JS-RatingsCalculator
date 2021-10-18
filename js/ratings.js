// create a function called collect_ratings(). This function does not accept any arguments.
//In the body of the collect_ratings() function, create an object named ratings. The object should have three properties count, sum, and average all set to 0.
//Still in the body of the collect_ratings() function, create a variable with the let keyword called rating. Give it the initial value of 0.

function collect_ratings(){
ratings = {count:0, sum:0, average:0};

let rating = 0;
};


//*Below the collect_ratings() function, add an event listener that listens for the change event on document. When creating the event listener, pass an arrow function as the handler.
//In the change event listener handler, call the collect_ratings() function and store the result in a constant called ratings.
// Still in the change event listener handler, use the querySelector() method to select the element that has an id of average. Set the value property of this element to ratings.average. Fix ratings.average to two decimal places.




// To calculate the average rating, we need the values of all input elements in the HTML that have a class of rating. 
//Use the querySelectorAll() method of document to select all elements that have a class of rating. 
//The querySelectorAll() method creates an array that should be stored in a constant called elements.

const elements = document.querySelectorAll(rating);

//Cycle through the elements array with a forEach loop.
// Pass an anonymous or arrow function to the forEach loop. 
//The function should accept a single argument called element.

//In the forEach loop function, call the replace() function on the element.id. 
//To replace(), pass the correct arguments that replace the word star with nothing. Pass this statement to parseInt() to convert the remaining string to a number. 
//All of this should be assigned to the existing rating variable.

//Still in the forEach loop function, pass element.value to the parseInt() function and use the addition assignment operator to assign the result to the count property of the ratings object.

//Still in the forEach loop function, pass element.value to the parseInt() function and multiply it by rating. Use the addition assignment operator to assign the result to the sum property of the ratings object.

elements.forEach(function(element){
    element.id.replace(start, )
});

//Below the forEach loop, create an if statement that tests whether the count property of the ratings object is not equal to 0.
//In the if statement, set the average property of the ratings property to sum divided by count.

//Return the ratings object from the collect_ratings() function.

if(count !== 0) {
   average = sum/count;
    return ratings;

};


//*Below the collect_ratings() function, add an event listener that listens for the change event on document. When creating the event listener, pass an arrow function as the handler.
//In the change event listener handler, call the collect_ratings() function and store the result in a constant called ratings.
// Still in the change event listener handler, use the querySelector() method to select the element that has an id of average. Set the value property of this element to ratings.average. Fix ratings.average to two decimal places.



