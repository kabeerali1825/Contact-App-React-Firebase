import { database } from "./firebase";
import {
  ref,
  push,
  onValue,
  child,
  update,
  remove,
  get,
} from "firebase/database";

export const addContactOnServer = (name, email) => {
  const namesRef = ref(database, "names"); // Reference to the 'names' node in the database

  // Push the name and email to the 'names' node
  push(namesRef, {
    name: name,
    email: email,
  })
    .then(() => {
      console.log("Name and email stored successfully in Realtime Database");
    })
    .catch((error) => {
      console.error(
        "Error storing name and email in Realtime Database:",
        error
      );
    });
};

export const getAllContacts = async () => {
  try {
    const namesRef = ref(database, "names");
    const snapshot = await get(namesRef);
    return snapshot.val();
  } catch (error) {
    console.error(
      "Error getting all contacts from the Realtime Database:",
      error
    );
    return null;
  }
};


// Update a contact on the server
export const updateContactOnServer = (name, email, id) => {
  try {
    const contactRef = child(ref(database, "names"), id);
    update(contactRef, { name, email })
      .then(() => {
        console.log("Contact updated successfully in Realtime Database");
      })
      .catch((error) => {
        console.error("Error updating contact in Realtime Database:", error);
      });
  } catch (error) {
    console.error("Error updating contact in Realtime Database:", error);
  }
};

// Delete a contact from the server
export const deleteContactOnServer = (id) => {
  try {
    const contactRef = child(ref(database, "names"), id);
    remove(contactRef)
      .then(() => {
        console.log("Contact deleted successfully from Realtime Database");
      })
      .catch((error) => {
        console.error("Error deleting contact from Realtime Database:", error);
      });
  } catch (error) {
    console.error("Error deleting contact from Realtime Database:", error);
  }
};

// Get a contact by its ID from the server
export const getContactById = (id) => {
  try {
    const contactRef = child(ref(database, "names"), id);
    return get(contactRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.error("Contact does not exist");
        return null;
      }
    }).catch((error) => {
      console.error("Error getting contact by ID from Realtime Database:", error);
      return null;
    });
  } catch (error) {
    console.error("Error getting contact by ID from Realtime Database:", error);
    return null;
  }
};
