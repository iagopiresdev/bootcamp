//create a documentation for all steps

//feches the HTML element from the DOM that we are going to use
let paragraphElement = document.getElementById("clicked");

//creates a funcion to do what we want to do
function changeParaghathText(){
    paragraphElement.textContent = "Clicked!"
}

//creates an event listener for clicks and calls the function if true
paragraphElement.addEventListener("click", changeParaghathText);


let textInput = document.getElementById("textInput");
function changeText(event){
    //alternativly
    //event.target.value; //works for all events
    //event.data; //only works for keypress
    if(textInput.value === "YES!"){
    
        console.log("YEAHHHH BABY!");
    }
}
textInput.addEventListener('input', changeText);



