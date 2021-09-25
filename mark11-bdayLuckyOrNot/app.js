const dateOfBirth = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-btn");
const msgBox = document.querySelector("#msg-box");

checkNumberBtn.addEventListener("click", checkBirthDateIsLucky);
function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sumDate = sumBirthDate(dob);
    const luckynum = parseInt(luckyNumber.value);
 
    
    if (dateOfBirth.value == "" || luckyNumber.value == "") 
    {
        msgBox.innerText= "Please enter both the fields " ;

    } 
    else if (sumDate % luckynum == 0)
     {
        msgBox.innerText= "Yippee You are Lucky 🎉!";
    } 
    else {
          msgBox.innerText = "oops! you are not lucky 😔";
    
    }
}


function sumBirthDate(dob){
    dob = dob.replace("-","");
    dob = dob.replace("-","");
    console.log(dob);
    let sum=0;
    for( let i=0; i<dob.length;i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
    console.log(sum);
    
}