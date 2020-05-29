var btn = document.getElementById("go-button");

function buttonClicked() {
    console.log("button clicked");
    btn.removeEventListener("click", buttonClicked);
    console.log(document.getElementById("text").innerHTML);
    document.getElementById("text").innerHTML = "text to replace";
    console.log(document.getElementById("text"));
    console.log(document.getElementById("text").innerHTML);
}

btn.addEventListener("click", buttonClicked);