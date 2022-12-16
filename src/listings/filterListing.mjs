import { baseUrl } from "../api/apiBase.mjs";
import { displayListing } from "./displayListing.mjs";
import { DOM_listing } from "../DOM/insertListing.mjs";
const endpoint = "/auction/listings?_seller=true";
const container = document.querySelector(".container-cards");
export async function sortFilter(filterWord) {
  const filterArray = [];
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const result = await response.json();
    console.log(result.length);

    for (let i = 0; i < result.length; i++) {
      filterArray.push(result[i]);
    }
  } catch (e) {
  } finally {
    console.log(filterArray);
    container.innerHTML = "";
    for (let i = 0; i < filterArray.length; i++) {
      console.log(filterArray[i].tags.length);
      for (let x = 0; x < filterArray[i].tags.length; x++) {
        if (
          filterArray[i].tags[x]
            .toUpperCase()
            .includes(filterWord.toUpperCase())
        ) {
          console.log(filterArray[i]);
          DOM_listing(container, filterArray[i]);
        }
      }
    }
  }
}
