import {serverConst, fetchDefaults} from '../Constants';

export function pingRequest() {
    url = serverConst.baseUrl + `/api/ping`;
    console.log("fetch " + url);
    return fetch(url, fetchDefaults)
        .then(response => {
            // console.log("place 1" + response);
            return response.json();
        }
            )
        .then(pingResponse => {
            // console.log("place 2" + pingResponse);
            return pingResponse
        })
        // .catch(error => console.error("ping error: " + error))
    

}