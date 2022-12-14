import { baseUrl } from "../api/apiBase.mjs";
import { getToken } from "../auth/status.mjs";
const endpoint = "/auction/listings";
const token = getToken();

export function postListing(title, description, tags, media, endsAt) {
  const ends = convertDate(endsAt);

  //body data uten bilde
  let data = {
    title: title,
    description: description,
    endsAt: ends,
    tags: [tags],
  };
  if (media) {
    //body data med bilde
    data = {
      title: title,
      description: description,
      endsAt: ends,
      tags: [tags],
      media: [media],
    };
  }

  //url fetch and post method
  fetch(`${baseUrl}${endpoint}`, {
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
        document.location.reload(true);
      }
      return response.json();
    })
    .then((Object) => {})
    .catch((error) => console.log("error", error));
}

/**
 * Converts a date string to an ISO date string.
 *
 * @param {string} date - The date string to convert.
 * @returns {string} - The ISO date string.
 * @throws {TypeError} - If the input is not a string.
 */
function convertDate(date) {
  if (typeof date !== "string") {
    throw new TypeError("Input must be a string");
  }
  const iso = date + "T00:00:00.000Z";
  return iso;
}
