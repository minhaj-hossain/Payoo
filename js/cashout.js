








const cashOut = document.getElementById('cashout');

cashOut.addEventListener('click', e => {

    e.preventDefault();

    // get agent number 



    // const agentNumber = document.getElementById('cashout-number');
    // const number = agentNumber.value;

    // console.log(number);

    // using machine function 

    const number = getValue('cashout-number');
    // console.log(number);


    // get user input amount
    const amount = getValue('cashout-amount');
    console.log(amount)

    // get current balance 
    // const currentBalence = document.getElementById('amount')
    // const balance = currentBalence.innerText;

    const balance = innerText('amount');



    // console.log(balance);

    // new balance 

    const newBalance = Number(balance) - Number(amount);


    if (newBalance < 0) {
        alert('invalid amount');
        return;
    }

    console.log(newBalance)

    // get the pin and verify

    // const enteredPIN = document.getElementById('cashout-pin');
    // const pin = enteredPIN.value;

    const pin = getValue('cashout-pin');

    if (pin === '1234') {
        alert('successful');
        currentBalence.innerText = newBalance;
    } else {
        alert('go back!')
        return;
    }








})