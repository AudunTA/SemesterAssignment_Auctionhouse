import { baseUrl } from "../api/apiBase.mjs";
import { displayListing } from "./displayListing.mjs";
import { DOM_listing } from "../DOM/insertListing.mjs";
const endpoint = "/auction/listings?_seller=true&sort=created&sortOrder=desc";
const container = document.querySelector(".container-cards");
//search function
export async function search(searchword) {
  //creating empty array
  const searchArray = [];
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const result = await response.json();

    for (let i = 0; i < result.length; i++) {
      //pusing to array so searching listing goes faster
      searchArray.push(result[i]);
    }
  } catch (e) {
  } finally {
    for (let i = 0; i < searchArray.length; i++) {
      if (
        searchArray[i].title.toUpperCase().includes(searchword.toUpperCase())
      ) {
        DOM_listing(container, searchArray[i]);
      }
    }
  }
}
