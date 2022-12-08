import { baseUrl } from "../api/apiBase.mjs";
import { DOM_listing } from "../DOM/insertListing.mjs";
const endpoint = "/auction/listings?_seller=true";
const DOM_cards = document.querySelector(".container-cards");
DOM_cards.innerHTML="";
export async function displayListing(numListings) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        const result = await response.json();
        for(let i = 0; i < result.length; i++) {
            DOM_listing(DOM_cards, result[i]);
            if(i === numListings) {
                break;
            }
        }
    } catch(e) {

    }
}