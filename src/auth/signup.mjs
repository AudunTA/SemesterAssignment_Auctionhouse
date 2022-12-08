import { baseUrl } from "../api/apiBase.mjs";

const endpoint = "/auction/auth/register";
const input_username = document.querySelector("#userName_signUp");
const input_email = document.querySelector("#userEmail_signUp");
const input_password = document.querySelector("#userPassword_signUp");


export async function register() {
    const userData = {
        name: input_username.value,
        email: input_email.value,
        password: input_password.value,
        
    };
    try {
        console.log(JSON.stringify(userData));
        const request = await fetch(`${baseUrl}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            body: JSON.stringify(userData),
          });
          const result = await request.json();
          console.log(result);
    }
    catch(e) {

    }
}
