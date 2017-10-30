import { serverConst, fetchDefaults } from '../Constants';
import base64 from 'base-64';

export function login(username, password) {
    console.log("remote login with user " + username);

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
            console.log("login response status: " + response.status);
            return response.status == 200;
        }
        )
        


}