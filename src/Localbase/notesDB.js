import Localbase from "localbase";
let db = new Localbase("db");

// Get all Notes

export async function getNotes() {
  try {
    let users = await db.collection("notes").get();
    (users.length === 0) && new Error("No Notes")
    return users.reverse();
  } catch (error) {
    console.log("error: ", error);
  }
}

// Add New Note
export async function insertNote({ id,date, title, content }) {
  await db.collection("notes").add({
    id,
    date,
    title,
    content,
  });
}

//Delete note
export async function deleteNote(id) {
  await db.collection("notes").doc({ id }).delete();
}
