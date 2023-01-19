// grabing variable for search button
const btn = document.querySelector('#btn');
const foodItemContainer = document.querySelector('#foodItem');

// setting up temporary list for food
const items = ["pizza", "quesadillas", "sheet pan", "sandwhiches", "soup"];



//function to handle btn search
function searchBtn(event) {
    event.preventDefault();

    //grabbing a random item 
    chosenItem = items[(Math.floor(Math.random() * items.length))];
    console.log(`The chosen item was ${chosenItem}`);

    //setting the fooditem text value as chosenItem
    foodItemContainer.value = chosenItem;
    return;
}


// setting listener event to btn
btn.addEventListener('click', searchBtn);


