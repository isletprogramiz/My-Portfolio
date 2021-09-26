const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const checkBtn = document.querySelector("#check-btn");


const showResult = document.querySelector("#show-result");

checkBtn.addEventListener("click" , function check(event){
   
  var  angle1 = Number(firstAngle.value);
  var  angle2 = Number(secondAngle.value);
  var  angle3 = Number(thirdAngle.value);
   
    if(angle1 ==0 || angle2 ==0 || angle3 == 0 ){
        showResult.innerText="input all the three angles"
    }
    else if((angle1 + angle2 + angle3) === 180)
    {
        showResult.innerText = "Cool, It is a Triangle😎 ";
    }
    else{
         showResult.innerText="Oops, not a triangle😔";
    }
    
    
})






