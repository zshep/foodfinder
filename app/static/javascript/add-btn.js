// grabbing variable for submit btn
const submitbtn = document.querySelector('#submitbtn');
const foodItem = document.querySelector('#newFood');
const checkbox = document.querySelector('#isHot');
const pickfoodbtn = document.querySelector('#pickbtn');


// function to add new food item, and various details
async function submitfood(event) {
    event.preventDefault();
    
    const foodname = foodItem.value;
    
    //checking to see if box is checked or not
    if (checkbox.checked) {
        ishot = true;
    } else {
        ishot = false;
    }
    
    if (foodname){
        console.log(ishot);
    
        console.log('the submit button was hit')
        console.log('the new food is...', foodname)
        console.log('The food is hot:', ishot)
        
        
    // Sending a new foodname and ishot to db  
    const response = await fetch('/addfood', {
        method: 'POST',
        body: JSON.stringify({
            foodname,
            ishot
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        console.log('response is success', response)

    } else {
        console.log('The post method failed')
        alert(response.statusText)
    }
  } else {
    console.log('There is incomplete information');
    alert('You did not complete the form completely');
  }
}    

//function to go back to picking a page
function pickfood(event) {

    event.preventDefault();
    console.log('the pickfood btn was pushed');

    document.location.replace('/');
} 


submitbtn.addEventListener('click', submitfood);
pickfoodbtn.addEventListener('click', pickfood);