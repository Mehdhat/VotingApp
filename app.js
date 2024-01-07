const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddParticipant() {
    if (inputBox.value === '') {
        alert("Participant name cannot be empty!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';

        let span = document.createElement("span");
        span.textContent = "0";
        li.appendChild(span);
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        let span = e.target.querySelector("span");
        let count = parseInt(span.textContent, 10);
        span.textContent = count + 1;
    }
}, false);
