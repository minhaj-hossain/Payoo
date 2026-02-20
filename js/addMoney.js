

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');

    const elem = document.getElementById(id);
    elem.classList.remove('hidden');
}