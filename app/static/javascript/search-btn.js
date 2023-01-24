// grabing variable for search button
const btn = document.querySelector('#btn');
const foodItemContainer = document.querySelector('#foodItem');

// setting up temporary list for food
const items = ["pizza", "quesadillas", "sheet pan", "sandwhiches", "soup"];



//function to handle btn search
async function searchBtn(event) {
    event.preventDefault();
    
    console.log('the button has been pressed');

    // my attempt at using fetch api to grab random food item from db
    await fetch('/fooditems')

      .then((response =>{
        if (!response.ok) {
          console.log(response);
          throw new Error(`HTTP error: ${response.status} `)
        }
        console.log(response);

        return document.location.reload;

      }))

      
    
}


// setting listener event to btn
btn.addEventListener('click', searchBtn);





//      ----------- searchBtn code for No Database----------

/* 
//grabbing a random item 
chosenItem = items[(Math.floor(Math.random() * items.length))];
console.log(`The chosen item was ${chosenItem}`);

//setting the fooditem text value as chosenItem
foodItemContainer.innerHTML = chosenItem;
return; */