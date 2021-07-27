const birthDate = document.querySelector(".birthdate");
const LuckyNo = document.querySelector(".luckyNumber");
const checkBtn = document.querySelector("#checkbtn");
const output = document.querySelector(".output");
const hidePrivacyNotice = document.querySelector(".cut");
const privacySection = document.querySelector(".privacy");
const outputLucky = document.querySelector(".outputLucky ")
const outputNotLucky = document.querySelector(".outputNotLucky ");
const scrollpage = document.querySelector(".scroll")


//we are finding that your birthday is lucky number or not by summing the date of birth and dividing it with your lucky number//

//to sum the date,month and year using array//

function SumOfBirthDate() {
    let sum = 0;
    let string = birthDate.value;
    let arrbirthdate = string.split("-");
    arrbirthdate.forEach(item => {
        sum += parseInt(item)
    })

    console.log(sum)
    if (LuckyNo.value == "" && birthDate.value == "") {
        return output.innerHTML = "please enter a valid number to proceed"
    } else if (LuckyNo.value == 0) {
        return output.innerHTML = "please don't enter zero as a lucky Number"
    } else if (sum % parseInt(LuckyNo.value) === 0) {
        output.innerHTML = "wow!! This is your lucky number";
        outputNotLucky.style.display = "none";
        outputLucky.style.display = "block";
    } else {
        output.innerHTML = "NO!! This is not your lucky number";
        outputLucky.style.display = "none";
        outputNotLucky.style.display = "block";
    }
    birthDate.value = '';
    LuckyNo.value = '';

}




checkBtn.addEventListener('click', SumOfBirthDate);

hidePrivacyNotice.addEventListener('click', () => {
    privacySection.style.display = 'none';


})