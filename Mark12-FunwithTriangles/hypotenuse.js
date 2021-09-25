const baseInput = document.querySelector("#base");
const heightInput = document.querySelector("#height");
const calculateHypoBtn = document.querySelector("#btn");
const showResult = document.querySelector("#show-result");

calculateHypoBtn.addEventListener("click", calculateHypo);

function calculateHypo() {
    b = Number(baseInput.value);
    p = Number(heightInput.value);
    
    if(b == 0 || p == 0 ){
    //    console.log("xyz");
       showResult.innerText = "Please enter both the values";
    }
    else{
        const hypo = Math.sqrt(b*b + p*p) ;
        showResult.innerText =  "The length of hypotenuse is  " + hypo; 
        console.log(hypo);

    }
    
};