var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addPopUpButton = document.getElementById("add-popup-button")
addPopUpButton.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})
var cancelbutton = document.getElementById("cancel-button")
cancelbutton.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})  

var container = document.querySelector(".container")
var bookTitleInput = document.getElementById("book-title-input")
var bookAuthorInput = document.getElementById("book-author-input")
var bookDescriptionInput = document.getElementById("book-description-input")
var addBook = document.getElementById("Add-book")

addBook.addEventListener("click", function (event) {
    event.preventDefault()
    var Div = document.createElement("div")
    Div.setAttribute("class", "box-container")
    Div.innerHTML = `<h2 id="book-title">${bookTitleInput.value}</h2>
<h5 id="book-author">${bookAuthorInput.value}</h5>
<p id="book-desc">${bookDescriptionInput.value}</p>
<button id="editDescription" onclick="edit(event)">Edit</button>
<button id="deleteDecription" onclick=deleteDesc(event)>Delete</button>`
    container.append(Div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
    bookAuthorInput.value = ""
    bookTitleInput.value = ""
    bookDescriptionInput.value = ""


})

function edit(event) {
    event.preventDefault()
    var bookContainer= event.target.parentElement
    let bt=bookContainer.querySelector("h2").innerText
    let at=bookContainer.querySelector("h5").innerText
    let bd=bookContainer.querySelector("p").innerText
    document.getElementById("book-title-input").value = bt
    document.getElementById("book-author-input").value = at
    document.getElementById("book-description-input").value = bd
    
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
   
}

function deleteDesc(event) {
    event.target.parentElement.remove()
}