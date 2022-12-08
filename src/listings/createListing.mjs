import { baseUrl } from "../api/apiBase.mjs";
const endpoint = "/auction/listings";
    const token = localStorage.getItem("accessToken");

export function postListing(title, description, tags, media, endsAt) {
    const data = JSON.stringify( {

        title: `${title}`,
        description: `${description}`,
        tags:  [`${tags}`],
        media: `${media}`,
        endsAt: `${endsAt}`
      });
      console.log(data);
        //url fetch and post method
        fetch(`${baseUrl}${endpoint}`, {
        method: 'POST', 
        headers: {
          Authorization: `Bearer ${token}`,
          'content-Type': 'application/json',
        },
        //data in the body
        body: JSON.stringify( {
            title: `${title}`,
            description: `${description}`,
            endsAt: `${endsAt}`,
            tags:  [`${tags}`],
            media: `${media}`
        })
      })
        .then((response) => {
          if (response.ok === true) {
            //reloads page if comment is posted to update the display
           document.location.reload (true); 
          }
          return response.json();
        })
        .then((Object) => {
          //failed
        })
        .catch(error => console.log("error",  error));
    }