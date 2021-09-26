const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const btnCheck = document.querySelector("#btn-check");
const showArea = document.querySelector("#show-area");

function calculateArea() {

    const s1 = Number(firstSide.value);
    const s2 = Number(secondSide.value);
    const s3 = Number(thirdSide.value);

    if (
        s1+ s2> s3 &&
        s2 + s3 > s1&&
        s1 + s3> s2
    ) {
        const s =
            (s1 + s2 + s3) / 2;

        const result = Math.sqrt( s *(s - s1) *(s - s2) *(s - s3) )
        showArea.innerText = "Area of a triangle using heron's formula is " + result;
    } else {
        showArea.innerText = "Enter valid side lengths such that each side lengths";
    }
}

 btnCheck.addEventListener("click", calculateArea);