
const form = document.querySelector('form')
const liList = document.querySelectorAll("li")
const userInfo = document.querySelector(".user-info")
const days = document.querySelector(".days")

const date = new Date()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const element = e.target
    valuesList = getData(element)
    liList[0].innerHTML += valuesList[0] + " " + valuesList[1]
    liList[1].innerHTML += date.getFullYear() - Number(valuesList[2].slice(-4))
    userInfo.style.display = "block"
    form.submit
})

function getData(element) {
    const inputValues = []
    const inputs = element.querySelectorAll("input")
    for (input of inputs){
        inputValues.push(input.value)
    }
    return inputValues
}