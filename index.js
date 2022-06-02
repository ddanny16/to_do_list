//assign variables to unordered list and li as items
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
//function to return the length of the user input or the input value
function inputLength() {
    return userInput.value.length;
}
//function to return the lenght of list item or the to items
function listLength() {
    return item.length;
}
//function to create the list items
function createListElement() {
    var li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createTextNode(userInput.value)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul
    userInput.value = ""; //Reset text input field
    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH
    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON
    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add("delete")
    }
    //END ADD CLASS DELETE
}
function addListAfterClick() {
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        createListElement();
    }
}


enter.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeypress);
userInput.addEventListener("keypress", addListAfterKeypress); 