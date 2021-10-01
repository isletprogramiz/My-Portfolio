const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-button");
const outputTotal = document.querySelector(".total-marks");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°"
];


function calculateScore() {

  let score=0, index =0;

  const formResults = new FormData(quizform);

  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
     
      score = score + 1;
    }
    else{
        index = index + 1;
    }
    index = index + 1;
  }
  outputTotal.innerText = "The score is " + score;
}
submitBtn.addEventListener("click", calculateScore);
