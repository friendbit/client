import {serverConst} from '../Constants';

export function pingRequest() {
    // console.log("place 0");
    return fetch(serverConst.baseUrl + `/api/ping`)
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