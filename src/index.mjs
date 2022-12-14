import { baseUrl } from "./api/apiBase.mjs";
import { register } from "./auth/signup.mjs";
import { logIn } from "./auth/login.mjs";
import {getToken} from "./auth/status.mjs";
import { displayListing } from "./listings/displayListing.mjs";
import { updateUserDOM } from "./auth/status.mjs";
import { signOut } from "./auth/signout.mjs";
import { getAvatarLoggedIn } from "./auth/status.mjs";
import { postListing } from "./listings/createListing.mjs";
console.log(baseUrl);
const userLoggedIn = document.querySelector(".user-logIn");
const btn_signUp = document.querySelector("#btnHeader_signUp");
const btn_addBalance = document.querySelector("#btn_addBalance");
const DOM_credits = document.querySelector("#user_credit");

const btn_searchHeader = document.querySelector("#btn_searchH");
const input_searchHeader = document.querySelector("#search_fieldH");
const btn_searchMobile = document.querySelector("#btn_searchM");
const input_searchMobile = document.querySelector("#search_fieldM");
if(getToken()) {
    const username = localStorage.getItem("username");
    const credits = localStorage.getItem("credit");
    userLoggedIn.style.display="block";
    getAvatarLoggedIn();


    btn_signUp.style.display="none";
    updateUserDOM(username, credits);
}
    else {
        console.log("not logged in");
        btn_addBalance.disabled = true;
        DOM_credits.innerHTML="log in to view "
        btn_addBalance.classList.add("btn-secondary");
        
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

btn_searchHeader.addEventListener("click", () => {
    console.log(input_searchHeader.value);
});

btn_searchMobile.addEventListener("click", () => {
    const searchWord = input_searchMobile.value;
    console.log(searchWord);
    window.location.href =`collection.html?search=${searchWord}`;
});
btn_searchHeader.addEventListener("click", () => {
    const searchWord = input_searchHeader.value;
    console.log(searchWord);
    window.location.href =`collection.html?search=${searchWord}`;
});

const create_form = document.querySelector("#create_form");

const input_title = document.querySelector("#create_title");
const input_description = document.querySelector("#create_description");
const input_tags = document.querySelector("#create_tags");
const input_media = document.querySelector("#create_media");
const input_ends = document.querySelector("#create_endsAt");

create_form.addEventListener("submit",(e) => {
    console.log("test");
    e.preventDefault();
    postListing(input_title.value, input_description.value, input_tags.value, input_media.value, input_ends.value);
    

});
