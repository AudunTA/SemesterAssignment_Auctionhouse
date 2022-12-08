export function getToken() {
    if(localStorage.getItem("accessToken")) {
        const token = localStorage.getItem("accessToken");
        return  token;
    }
    else {
        return false;
    }
}
const DOM_username = document.querySelector("#header_username");
const DOM_credits = document.querySelector("#user_credit");
export function updateUserDOM(username, credit) {
    DOM_username.innerHTML = username;
    DOM_credits.innerHTML = credit;
}