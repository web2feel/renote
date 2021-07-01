import Localbase from "localbase";
let db = new Localbase("db");

// Get all Notes
export async function getNotes() {
  let notes = await db.collection("notes").get()
  .then( res => res.reverse())
  .catch( error => error.message)
  return notes
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
