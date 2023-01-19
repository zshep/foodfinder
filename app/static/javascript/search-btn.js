// grabing variable for search button

const btn = document.querySelector('#btn')


//function to handle btn search
async function searchBtn(event) {
    event.preventDefault();

    console.log('The button has been pressed')


}


// setting listener event to btn
btn.addEventListener('click', searchBtn);


