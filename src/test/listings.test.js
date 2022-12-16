// i got an error while importing
// i have babel install, last time i had this error something was not updated
//import { baseUrl } from "../api/apiBase.mjs";

const apiURL = "https://api.noroff.dev/api/v1/auction/listings";

test("API testing if api gives sucessful reponse status", async () => {
  const response = await fetch(`${apiURL}`);
  expect(response.status).toBe(200);
});
