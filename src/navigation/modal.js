const btn_logIn = document.querySelectorAll(".btn_logIn");
const btn_signUp = document.querySelectorAll(".btn_signUp");
const modalLogIn = document.querySelector(".modal_logIn");
const modalSignUp = document.querySelector(".modal_signUp");
const btn_close = document.querySelectorAll(".close");
console.log("hei");
console.log(btn_logIn);
console.log(btn_logIn.length);
for(let i=0; i< btn_logIn.length; i++) {
    btn_logIn[i].addEventListener("click", () => {
    modalSignUp.style.display="none";
    modalLogIn.style.display="block";
})
}

for(let i = 0; i <btn_signUp.length; i++) {
    btn_signUp[i].addEventListener("click", () => {
        modalSignUp.style.display="block";
        modalLogIn.style.display="none";
    })
}
for(let i = 0; i <btn_close.length; i++) {
    btn_close[i].addEventListener("click", () => {
        modalSignUp.style.display="none";
        modalLogIn.style.display="none";
    })
}

export function closeModalLogIn() {
    modalLogIn.style.display="none";
}

