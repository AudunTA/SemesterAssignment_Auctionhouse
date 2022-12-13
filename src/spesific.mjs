import { spesific } from "./listings/displaySpesific.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
spesific(id);
