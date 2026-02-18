
const btn = document.getElementById('btnId');

btn.addEventListener('click', e => {

    e.preventDefault();

    const inputNumber = document.getElementById('inputNumber');
    const number = inputNumber.value

    const inputPin = document.getElementById('inputPin');
    const pin = inputPin.value;

    if(number == '01712871720' && pin == '1234') {

        alert('login successful');
        window.location.assign('home.html'); 


    }else {
        alert('wrong credential');
        return;
    }

    // console.log(pin);
})