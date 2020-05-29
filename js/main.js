var btn = document.getElementById("go-button");

function buttonClicked() {
    console.log("button clicked");
    btn.removeEventListener("click", buttonClicked);
    var textInput = document.getElementsByClassName("my-input");
    var results = document.getElementById("text");
    var textArea = document.getElementsByClassName("my-textarea");
    results.innerHTML = textInput[0].value + " said " + textArea[0].value;
    console.log("inner text: " + results.innerText);
}

btn.addEventListener("click", buttonClicked);
