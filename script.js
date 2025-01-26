//selecting all
var inputBox = document.getElementById("inputBox")
var btn = document.getElementById("btn")
var container = document.getElementById("container")

// when click add button ,, it add a new task which is in inputbox

btn.addEventListener("click", function () {
    var li = document.createElement("li")
    li.innerHTML = inputBox.value + " " + '<button onclick="deleteItem(event)" class="bg-green-200 p-1 rounded m-2 "> Delete</button>'
    container.append(li)

})

// function for delete btn to delete whenever click delete
function deleteItem(event) {
    console.log(event.target.parentElement)
    event.target.parentElement.remove()
}