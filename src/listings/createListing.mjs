import { baseUrl } from "../api/apiBase.mjs";
import { getToken } from "../auth/status.mjs";
const endpoint = "/auction/listings";
    const token = localStorage.getItem("accessToken");

export function postListing(title, description, tags, media, endsAt) {
  const ends = converteDate(endsAt);
  const data = {
    title: title,
    description: description,
    endsAt: ends,
    tags: [tags],
    media: [media]
  };
  console.log(JSON.stringify(data));
      console.log(title, description, ends, media);
        //url fetch and post method
        fetch(`${baseUrl}${endpoint}`, {
        method: 'POST', 
        headers: {
          Authorization: `Bearer ${token}`,
          'content-Type': 'application/json',
        },
        //data in the body
        body: JSON.stringify(data),
        
      })

        .then((response) => {
          if (response.ok === true) {
            //reloads page if comment is posted to update the display
           document.location.reload (true); 
          }
          return response.json();
        })
        .then((Object) => {
          console.log(Object);
        })
        .catch(error => console.log("error",  error));
    }

function converteDate(date) {
  const iso = date + 'T00:00:00.000Z';
  return iso;
}