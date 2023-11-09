const countValue = document.querySelector('#counter');

const increment = function(){
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value
    value++;
    // After updating the value, move that value back to the body or UI
    countValue.innerText = value;
}

const decrement = function(){
    // take the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value
    value--;
    // After Updating, move the value back to UI
    countValue.innerText = value;
}