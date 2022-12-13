import { baseUrl } from "./api/apiBase.mjs";
import { register } from "./auth/signup.mjs";
import { logIn } from "./auth/login.mjs";
import {getToken} from "./auth/status.mjs";
import { displayListing } from "./listings/displayListing.mjs";
import { updateUserDOM } from "./auth/status.mjs";
import { signOut } from "./auth/signout.mjs";
console.log(baseUrl);
const userLoggedIn = document.querySelector(".user-logIn");
const btn_signUp = document.querySelector("#btnHeader_signUp");
if(getToken()) {
    const username = localStorage.getItem("username");
    const credits = localStorage.getItem("credit");
    userLoggedIn.style.display="block";

    btn_signUp.style.display="none";
    updateUserDOM(username, credits);
}
    else {
        console.log("not logged in");
    }


const signup_form = document.querySelector("#signUp_form");

const logIn_form = document.querySelector("#logIn_form");

signup_form.addEventListener("submit", (e) => {
    e.preventDefault();    
    register();
});

logIn_form.addEventListener("submit",(e) => {
    e.preventDefault();
    logIn();
    

});

displayListing(2);

const logOut = document.querySelector(".log-out");
logOut.addEventListener("click", () => {
    signOut();
})


