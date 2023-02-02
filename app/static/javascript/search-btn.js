// grabing variable for search button
const btn = document.querySelector('#btn');
const foodItemContainer = document.querySelector('#foodItem');


//function to handle btn search
function searchBtn(event) {
  event.preventDefault();

  console.log('the button has been pressed');

  getFood()

  console.log('getfood() should be done')
  
  
  

}

function getFood() {
  
  console.log('getfood() has been started')
  
  fetch('/food')
    .then((res) => {
      res.json();
      
    })
    .then(function(data) {

      console.log((data))
      
      console.log('we should be done with the fetch API');
      
    })
    .catch((error) => {
      console.error('The fetch operation fucked up', error);
    });

    
    
    

};



// setting listener event to btn
btn.addEventListener('click', searchBtn);





