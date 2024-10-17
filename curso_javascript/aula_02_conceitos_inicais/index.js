const form = document.querySelector('form');
const spanList = document.querySelectorAll("span");
const userInfo = document.querySelector(".user-info");
const days = document.querySelector(".days");
const birthInput = document.querySelector('.birth-input')

const currentDate = new Date();
const miliToDays = 1000 * 60 * 60 * 24;

birthInput.addEventListener('input', (event) => {
    const data = event.data
    if(isNaN(parseInt(data))){
        birthInput.value = birthInput.value.slice(0, -1)
    }
    if (Array.from(birthInput.value).length === 2 || Array.from(birthInput.value).length === 5){
        console.log('passei')
        birthInput.value += '/'
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const valuesList = getData(event.target);
    const birthdayDate = getBirthdayDate(valuesList[2]);

    spanList[0].innerHTML = valuesList[0] + " " + valuesList[1];
    spanList[1].innerHTML = currentDate.getFullYear() - parseInt(valuesList[2].slice(-4));
    spanList[2].innerHTML = Math.floor((birthdayDate.getTime() - currentDate.getTime()) / miliToDays);

    userInfo.style.display = "block";
    form.submit;
})

function getData(element) {
    const inputValues = [];
    const inputs = element.querySelectorAll("input");
    for (input of inputs){
        inputValues.push(input.value);
    }
    return inputValues;
}

function getBirthdayDate(dateStr){
    const nextYear = String(parseInt(currentDate.getFullYear()) + 1);
    return new Date(nextYear + "-" + dateStr.slice(3, 5) + "-" + dateStr.slice(0, 2));
}
