import { baseUrl } from "../api/apiBase.mjs";
import { displayListing } from "./displayListing.mjs";
import { DOM_listing } from "../DOM/insertListing.mjs";
const endpoint = "/auction/listings?_seller=true&sort=created&sortOrder=desc";
const container = document.querySelector(".container-cards");
export async function search(searchword) {
  console.log(searchword);
  const searchArray = [];
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const result = await response.json();
    console.log(result.length);

    for (let i = 0; i < result.length; i++) {
      searchArray.push(result[i]);
    }
  } catch (e) {
  } finally {
    console.log(searchArray.length);
    for (let i = 0; i < searchArray.length; i++) {
      if (
        searchArray[i].title.toUpperCase().includes(searchword.toUpperCase())
      ) {
        console.log(searchArray[i]);
        DOM_listing(container, searchArray[i]);
      }
    }
  }
}
