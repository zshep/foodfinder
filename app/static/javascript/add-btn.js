// grabbing variable for submit btn
const submitbtn = document.querySelector('#submitbtn');
const foodItem = document.querySelector('#newFood');


async function submitfood(event) {
    event.preventDefault();

    const foodname = foodItem.value;
    console.log('the submit button was hit')
    console.log('the new food is...', foodname)
    console.log(foodname)

    const response = await fetch('/addfood', {
        method: 'POST',
        body: JSON.stringify({
            foodname
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