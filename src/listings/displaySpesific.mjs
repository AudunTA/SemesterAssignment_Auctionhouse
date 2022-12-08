import { baseUrl } from "../api/apiBase.mjs";
const endpoint = "/auction/listings/";

export async function spesific(id) {
    try {
        const response = await fetch(`${baseUrl}${endpoint}${id}`);
        const result = await response.json();
        console.log(result);
    }
    catch(e) {

    }
}