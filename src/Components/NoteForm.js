import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_note, cancelling_note } from "../Store/Notes/NoteSlice";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion"

function NoteForm() {
  const dispatch = useDispatch();

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setNote((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_note({
        id: uuidv4(),
        date: new Date().toUTCString(),
        title: note.title,
        content: note.content,
      })
    );

    setNote((prevState) => {
      return { ...prevState, title: "", content: "" };
    });
  };

  return (
    <motion.div 
    initial={{ scale: 0.9,  opacity:0 }}
    animate={{ scale: 1 ,  opacity:1 }}
    transition={{ duration: 0.3 }}
    className=" bg-white border-gray-300 p-6 rounded-md shadow-sm hover:shadow-md duration-300 border">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <label htmlFor="title" className="mb-2">
          <span className="text-sm text-gray-600"> Title </span>
          <input
            className="w-full border-gray-300 rounded"
            required
            name="title"
            value={note.title}
            type="text"
            onChange={handleChange}
          />
        </label>
        <label className="mb-2 flex-1">
          <span className="text-sm text-gray-600"> Content </span>
          <textarea
            required
            className="w-full border-gray-300 rounded"
            maxLength="260"
            name="content"
            id="text"
            rows="8"
            value={note.content}
            onChange={handleChange}
          ></textarea>
        </label>
        <div className="flex justify-between">
          <button className="bg-purple-500 hover:bg-purple-700 duration-300 px-4 py-2 rounded text-white">
            Submit
          </button>
          <div
            onClick={() => dispatch(cancelling_note())}
            className="bg-red-500 hover:bg-red-700 duration-300 px-4 py-2 rounded text-white cursor-pointer"
          >
            Cancel
          </div>
        </div>
      </form>
    </motion.div>
  );
}

export default NoteForm;
