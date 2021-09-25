// button click
var btnTranslate = document.querySelector("#btn-translate");

btnTranslate.addEventListener("click", buttonClickHandler);

// read input
var txtInput = document.querySelector("#txt-input");

// show output
var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/minion.json"

function buttonClickHandler(event) {
    console.log("button clicked");
    var input = txtInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("first write something!!"))

}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}