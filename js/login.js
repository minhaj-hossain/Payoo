
const btn = document.getElementById('btnId');

btn.addEventListener('click', e => {

    e.preventDefault();

    // const inputNumber = document.getElementById('inputNumber');
    // const number = inputNumber.value

    const number = getValue('inputNumber')


    // const inputPin = document.getElementById('inputPin');
    // const pin = inputPin.value;

    const pin = getValue('inputPin');


    if(number == '01712871720' && pin == '1234') {

        alert('login successful');
        window.location.assign('home.html'); 


    }else {
        alert('wrong credential');
        return;
    }

    // console.log(pin);
})