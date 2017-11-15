import Expo from "expo";
import { Alert } from "react-native";

import {contactsLoaded} from "../actions";

export async function loadContacts(dispatch) {
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') {
        // Permission was denied...
        return;
    }
    const contacts = await Expo.Contacts.getContactsAsync({
        fields: [
            Expo.Contacts.PHONE_NUMBERS,
            Expo.Contacts.EMAILS,
            Expo.Contacts.THUMBNAIL,
            Expo.Contacts.PHONETIC_FIRST_NAME,
            Expo.Contacts.PHONETIC_LAST_NAME
        ],
        pageSize: 500,
        pageOffset: 0,
    });

   

    // return the contacts with thumbnails
    var contactsWithThumbnails = contacts.data.filter(contact => {
        return contact.imageAvailable;
    });

    dispatch(contactsLoaded(contactsWithThumbnails));
}