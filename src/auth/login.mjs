import { baseUrl } from "../api/apiBase.mjs";
import { closeModalLogIn } from "../navigation/modal.js";
const endpoint = "/auction/auth/login";

const userEmail_logIn = document.querySelector("#userEmail_logIn");
const userPassword_logIn = document.querySelector("#userPassword_logIn");


export async function logIn() {
    const user = {
        email: userEmail_logIn.value,
        password: userPassword_logIn.value,
        
    };
    try {
        const request = await fetch(`${baseUrl}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(user),
        });
        const results = await request.json();
        if(request.status === 200) {
            localStorage.setItem("accessToken", results.accessToken);
            localStorage.setItem("email", results.email);
            localStorage.setItem("username", results.name);
            localStorage.setItem("credit", results.credits);
            location.reload();
        }
    } catch(e) {

    }
}