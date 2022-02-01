const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username"


function onLoginSubmit(event) {
    event.preventDefault(); //Stop Default action
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("USERNAME_KEY", username);
    paintGreeting(username);

}

function paintGreeting(username){
    greeting.innerText =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem("USERNAME_KEY");
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greetings
    paintGreeting(savedUsername);

}

