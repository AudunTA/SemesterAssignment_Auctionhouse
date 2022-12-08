import { postListing } from "./listings/createListing.mjs";
import{ getToken } from "./auth/status.mjs";
import { search } from "./listings/searchListing.mjs";
//get parameters
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const searchWord = params.get("search");
if(searchWord) {
    await search("violin");
};
const sortButtons = document.querySelectorAll(".sort-icons");
const filter = params.get("filter");
console.log(filter);
console.log(searchWord);

if(filter) {
    if(filter === "games") {
        const icon_games = document.querySelector(".fa-gamepad");
        sortButtons[0].style.backgroundColor="blue";
        sortButtons[0].style.color="white";
        icon_games.style.color="white";
    }
    if(filter === "vehicles") {
        const icon_vehicles = document.querySelector(".fa-car");
        sortButtons[1].style.backgroundColor="blue";
        sortButtons[1].style.color="white";
        icon_vehicles.style.color="white";
    }
    if(filter === "art") {
        const icon_art = document.querySelector(".fa-palette");
        sortButtons[2].style.backgroundColor="blue";
        sortButtons[2].style.color="white";
        icon_art.style.color="white";
    }
}