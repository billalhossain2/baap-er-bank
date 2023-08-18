function getElementById(id){
    return document.getElementById(id);
}

function setTextInnerElement(id, value){
    return document.getElementById(id).innerText = value;
}

function getInputValue(id){
    return document.getElementById(id).value;
}


function isValidInput(inputValue){
    if(!inputValue){
        alert("Input field must be filled.")
        return true;
    }else if(inputValue < 0){
        alert("Please give positive value")
        return true;
    }else if(isNaN(inputValue)){
        alert("Please give a valid input")
    }
}

// event listeners 
getElementById("deposit-btn").addEventListener('click', function(){
    const depositInputValue = parseInt(getInputValue('deposit-field'));

    if(isValidInput(depositInputValue)){
        return;
    }

    const depositDisplayElement = getElementById("deposit-display");
    const previousDepositValue = parseInt(depositDisplayElement.innerText);
    depositDisplayElement.innerText = previousDepositValue + parseInt(depositInputValue);

    const balanceElem = getElementById("total-display");
    const currentBalance = parseInt(balanceElem.innerText);

    balanceElem.innerText = currentBalance + depositInputValue;

})

getElementById("withdraw-btn").addEventListener('click', function(){
    const withdrawInputValue = parseInt(getInputValue("withdraw-field"));
    if(isValidInput(withdrawInputValue)){
        return;
    }
    const currentBalanceElem = getElementById("total-display");
    const currentBalance = parseInt(currentBalanceElem.innerText);

    const withdrawTotalElem = getElementById("withdraw-display");
    const withdrawAmount = parseInt(withdrawTotalElem.innerText);

    //check balance is enough to withdraw
    if(withdrawInputValue > currentBalance){
        return alert("You can not withdraw more than your balance!")
    }

    withdrawTotalElem.innerText = withdrawAmount + withdrawInputValue;



    currentBalanceElem.innerText = currentBalance - withdrawInputValue;
})
