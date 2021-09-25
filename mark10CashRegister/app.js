const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn");
const errorMessage = document.querySelector("#error-message");
const alertMessage = document.querySelector("#alert-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const notesAvailable = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", validateBillAmount);
function validateBillAmount(){

    errorMessage.style.display = "none";
   if(billAmount.value>0) {

    if(cashGiven.value >= billAmount.value){
        alertMessage.style.display = "none";
      
       const amountToBeReturned = cashGiven.value - billAmount.value;
          amoutLeft(amountToBeReturned);
        
    }
      else{
        alertMessage.style.display = "block";
        alertMessage.innerText="invalid amount is entered";
      }
   }
   else{
    errorMessage.style.display = "block";
       errorMessage.innerText = "The bill amount should be a positive value";
   }
}
  function amoutLeft(amountToBeReturned){
         for (let i = 0; i < notesAvailable.length; i++) {
          
          const numberOfNotes = Math.trunc(amountToBeReturned / notesAvailable[i]);
   
          amountToBeReturned = amountToBeReturned % notesAvailable[i];
      
           noOfNotes[i].innerText = numberOfNotes;
         }
       }
 

