import {serverConst} from '../Constants';

export function pingRequest() {
    return fetch(serverConst.baseUrl + `/api/ping`)
        .then(response => 
            response.json())
        .then(pingResponse => {
            return pingResponse
        })
        // .catch(error => console.error("ping error: " + error))
    

}
