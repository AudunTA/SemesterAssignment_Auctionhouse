import { baseUrl } from "../api/apiBase.mjs";
const endpoint = "/auction/listings/";
const DOMtitle = document.querySelector("#spesific-title");
const DOMimg = document.querySelector("#spesific-img");
const DOMdescription = document.querySelector("#spesific-description");
const DOMAmountBids = document.querySelector("#bid-amount");
const DOMbids = document.querySelector(".bid-container");
const DOMhighestBid = document.querySelector("#highest-bid");
const DOMSellerName = document.querySelector("#seller-name");
import { getToken } from "../auth/status.mjs";
const token = getToken();
console.log(token);
const options = {
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
export async function spesific(id) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}${id}/?_seller=true`);
        console.log(response);
        const result = await response.json();
        console.log(result);
        DOMtitle.innerHTML = result.title;
        DOMimg.innerHTML = `<img class="w-100"src="${result.media[0]}" id="img-spesific">`;
        DOMdescription.innerHTML=result.description;
        DOMSellerName.innerHTML=result.seller.name;
        getBids(id);
    }
    catch(e) {

    }
}

async function getBids(id) {
    try {
        console.log("test");
        const response = await fetch(`${baseUrl}${endpoint}${id}/?_bids=true`);
        const result = await response.json();
        console.log(result);
        DOMAmountBids.innerHTML = result.bids.length;
        let x = result.bids.length;

        if(x === 0) {
            DOMhighestBid.innerHTML="this listing does not have any bids yet."
        } else { DOMhighestBid.innerHTML=result.bids[x-1].amount;
        console.log(result.bids[x-1].amount);
        console.log("TEST");}
        
        for(let i = 0; i < result.bids.length; i++) {
           
            let avatar = await getAvatar(result.bids[i].bidderName);
            DOMbids.innerHTML += `                      
            <div class="row mb-4 border-bottom pb-2">
              <div class="col-3">
                <img src="${avatar}"  onerror="this.src = '/images/profile.jpg'";
                  class="img-fluid shadow-1-strong rounded" alt="profile image" />
              </div>
      
              <div class="col-9">
                <p class="mb-2">${result.bids[i].bidderName}</p>
                <p>
                  <u>bid:${result.bids[i].amount} credits</u>
                </p>
              </div>
            </div>
          `;
    } 
}catch(e) {

    }
}

async function getAvatar(userName) {
    const endpointUser = `/auction/profiles/${userName}`;
    try {
        const response = await fetch(
            `${baseUrl}${endpointUser}`,
            options
          );
          const result = await response.json();
          return result.avatar;
    } catch(e) {

    }
}