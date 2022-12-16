import { baseUrl } from "../api/apiBase.mjs";
import { DOM_listing } from "../DOM/insertListing.mjs";
const endpoint = "/auction/listings?_seller=true&sort=created&sortOrder=desc";

export async function displayListing(container, numListings) {
  container.innerHTML = "";
  try {
    const response = await fetch(`${baseUrl}${endpoint}`);
    const result = await response.json();
    if (response.status === 200) {
      for (let i = 0; i < result.length; i++) {
        DOM_listing(container, result[i]);
        if (i === numListings) {
          break;
        }
      }
    } else {
      throw `the API responded with the errorcode ${response.status}`;
    }
  } catch (e) {
    //error handeling
    container.innerHTML = `<div class="col">
    <div class="card m-1 w-100" style="width: 18rem;">
      <div class="m-1">
        <p class="text-danger text-center pt-2">${e}</p>
      </div>
  </div>
  </div>`;
  }
}
