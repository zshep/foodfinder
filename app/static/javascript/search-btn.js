// grabing variable for search button
const btn = document.querySelector('#btn');
const addbtn = document.querySelector('#addbtn');
const foodItemContainer = document.querySelector('#foodItem');


//function to handle btn search
function searchBtn(event) {
  event.preventDefault();

  console.log('the button has been pressed');

  
  getFood()
  
  
  
}

function getFood() {
  
  
  
  fetch('/food')
    .then((res) => {
      
      const data =  res.json();
      
      return data
      

    })
    .then((data) => {
      const foodput = document.querySelector("#givenfooditem")
      
      console.log('the food is...', data.food)      
      foodput.innerHTML = data.food;

    })
    
    .catch((error) => {
      console.error('The fetch operation fucked up', error);
    });
};
// function to go to add food template
function addBtn(event) {
  event.preventDefault();
  console.log('the add btn was pushed');

  document.location.replace('/addfood');

}



// setting listener event to btn
btn.addEventListener('click', searchBtn);
addbtn.addEventListener('click', addBtn );




