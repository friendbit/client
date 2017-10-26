import { serverConst, fetchDefaults } from '../Constants';
import base64 from 'base-64';

export function login(username, password) {
    url = serverConst.baseUrl + `/login`;
    console.log("fetch " + url);

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

    return fetch(url,
        {
            method: 'GET',
            headers: headers,
        })
        .then(response => {
            // console.log("place 1" + response);
            return response.status == 200;
        }
        )
        


}