/*
Create a function named alertButtonClick which has one argument event, This function should 
call an in built alert function with text `Button was clicked which id is: ${buttonid}` where button id is 
dynamic text, with the button id which was called. See here how to get the button id
*/
const button = document.getElementById("button");
const v2 = document.getElementById("test");


const alertButtonClick = (event) => {
    let buttonid = event.target.id;
  alert(`Button was clicked which id is: ${buttonid}`);
};

button.addEventListener("click", alertButtonClick);
v2.addEventListener("click", alertButtonClick);

/*
Inside your document body  in index.html create a button element and give it an id element-add-button

Inside your index.js file select the button using getElementById and put it into a const

Create a function named addElement, this function should create a <p> element, then add the text This is the text. to the <p> element, then add that <p> element to the body.

Add a click event listener to your button and provide it the function addElement
*/

const addButton= document.getElementById("element-add-button");

const addElement = () => {
    const newParagraph = document.createElement("p");
    const content = document.createTextNode("This is the text.");
    newParagraph.appendChild(content);
    document.body.appendChild(newParagraph);
};

addButton.addEventListener("click", addElement);