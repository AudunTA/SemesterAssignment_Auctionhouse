import { baseUrl } from "../api/apiBase.mjs";
const endpoint = "/auction/listings";

export async function search(searchword) {
    const searchArray = [];
    try {
        const response = await fetch(`${baseUrl}${endpoint}`);
        const result = await  response.json();
        console.log(result.length);
        
        for( let i = 0; i < result.length; i++) {
            searchArray.push(result[i]);
        }

    } catch(e) {

    }
    finally {
        for(let i = 0; i < searchArray.length; i++) {
            if(searchArray[i].title.toUpperCase().includes(searchword.toUpperCase())) {
                console.log (searchArray[i].title);
            }
        }
    }
}