const number = document.querySelector('#number');
const start = document.querySelector('#btn-start');
const resetButton = document.querySelector('#btn-reset');
const range = document.querySelector('#range');
const confirm = document.querySelector("#btn-confirm");
const cancel = document.querySelector("#btn-cancel");
const myModal = document.querySelector("#modal-reset");

const getNumber = () => {
    if(range.value === ''){
        number.innerText = "Define range";
    }else{
        const rangeNumber = range.value;
        const randomNumber = Math.random() * rangeNumber;
        number.innerText = Math.floor(randomNumber) + 1;
    }

    }

const reset = () => {
    if(number.innerText === "..." && range.value === "" ){
        return;
    }else{
        myModal.style.display = "block";
    }
        
}

const confirmAction = () => {
    number.innerText = '...';
    range.value = '';
    myModal.style.display = "none";
}

const cancelAction = () => {
    myModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }


start.addEventListener('click', getNumber);
resetButton.addEventListener('click', reset);
confirm.addEventListener('click', confirmAction);
cancel.addEventListener('click', cancelAction)