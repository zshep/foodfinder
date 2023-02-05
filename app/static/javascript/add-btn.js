// grabbing variable for submit btn
const submitbtn = document.querySelector('#submitbtn');
const foodItem = document.querySelector('#newFood');
const checkbox = document.querySelector('#isHot');


// function to add new food item, and various details
async function submitfood(event) {
    event.preventDefault();
    
    
    //checking to see if box is checked or not
    if (checkbox.checked) {
        ishot = true;
    } else {
        ishot = false;
    }
    console.log(ishot);

    const foodname = foodItem.value;
    console.log('the submit button was hit')
    console.log('the new food is...', foodname)
    console.log('The food is hot:', ishot)
    


    // Sending a foodname to get added to db
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
    

}    


submitbtn.addEventListener('click', submitfood)