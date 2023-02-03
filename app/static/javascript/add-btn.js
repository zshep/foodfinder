// grabbing variable for submit btn
const submitbtn = document.querySelector('#submitbtn');
const foodItem = document.querySelector('#newFood').ariaValueMax;


function submitfood() {
    console.log('the submit button was hit')
    console.log('the new food is...', foodItem.value)

    fetch('/addfood', {

        method: 'POST',
        body: JSON.stringify({
            foodItem
        })


    })

    return
}




/* submitbtn.addEventListener('click', submitfood) */