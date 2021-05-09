import { delete_note } from "../Store/Notes/NoteSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion"

function NoteItem({ id, date, title, content }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(delete_note({ id }));
  };

  let localdate = new Date(date);

  return (
    <motion.div 
    initial={{ y: 10,  opacity:0 }}
    animate={{ y:0 ,  opacity:1 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-6 rounded-md shadow-sm hover:shadow-md duration-300">
      <div className="card note h-full">
        <div className="card-body flex flex-col h-full ">
          <p className="text-xs text-purple-600 mb-2">
            {localdate.toLocaleDateString("en-GB")}
          </p>
          <h2 className="text-xl text-gray-700 leading-tight font-semibold">
            {title}
          </h2>
          <div
            className="my-4 text-gray-500 font-mono text-sm leading-relaxed flex-1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div>
            <button onClick={handleDelete} className="bg-purple-100 hover:bg-purple-200 duration-300 rounded-full block p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NoteItem;
