import { spesific } from "./listings/displaySpesific.mjs";
import { baseUrl } from "./api/apiBase.mjs";
import { getToken, updateCredits } from "./auth/status.mjs";
import { updateHeaderUser } from "./auth/status.mjs";

const token = getToken();
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const btnBid = document.querySelector("#btn_bid");
const bidAmount = document.querySelector("#input_bid");
console.log(id);
const endpoint = `/auction/listings/${id}/bids`;
spesific(id);
if (!token) {
  console.log("user not logged in");
  btnBid.disabled = true;
  btnBid.classList.add("btn-secondary");
} else {
  const username = localStorage.getItem("username");
  updateHeaderUser(username);
}
function checkExpired() {}
btnBid.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("test");
  submitBid(bidAmount.value);
});

//submit bid function
function submitBid(bidNum) {
  //dataobject.
  //amount had to be converted to number
  const data = {
    amount: Number(bidNum),
  };
  console.log(JSON.stringify(data));
  //url fetch and post method
  //fetching baseurl and this endpoints
  fetch(`${baseUrl}${endpoint}`, {
    //post method
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-Type": "application/json",
    },
    //data in the body
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok === true) {
        //reloads page if comment is posted to update the display
        //run updatecredits function to local storage as this will change on submit bid
        updateCredits();
        setTimeout(() => {
          document.location.reload(true);
        }, 500);
      }
      return response.json();
    })
    .then((Object) => {
      console.log(Object);
    })
    .catch((error) => console.log("error", error));
}
