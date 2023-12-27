import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getContacts = async () => {
  try {
    const contacts = [] as any[];
    const querySnapshot = await getDocs(collection(db, "contacts"));
    querySnapshot.forEach((doc) => {
      contacts.push({...doc.data()});
    });
    return contacts
  } catch (error) {
    console.log('Get Contacts Error: ',error);
  }

};
export const addContact = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
