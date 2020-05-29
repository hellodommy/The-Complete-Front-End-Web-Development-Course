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

var hobbies = ["pizza", "sleep", "gaming"];
hobbies.forEach(function(item, index) {
    console.log("I like ", item, index);
})

console.log("shift: " + hobbies.shift());
console.log("hobbies: " + hobbies);
console.log("unshift: " + hobbies.unshift("studying"));
console.log("hobbies now: " + hobbies);