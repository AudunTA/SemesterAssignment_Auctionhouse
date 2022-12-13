import { spesific } from "./listings/displaySpesific.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const btnBid = document.querySelector("#btn_bid");
const bidAmount = document.querySelector("#input_bid");
console.log(id);
spesific(id);

btnBid.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
    console.log(bidAmount.value);
})

