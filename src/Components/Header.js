import { useDispatch, useSelector } from "react-redux";
import { posting_note } from "../Store/Notes/NoteSlice";

function Header() {
  const dispatch = useDispatch();
  const { posting } = useSelector((state) => state.notes);
  return (
    <div className="shadow bg-gradient-to-r from-purple-700 to-blue-400 fixed top-0 min-w-full h-16">
      <div className="max-w-screen-xl mx-auto flex items-center px-4 h-full justify-between">
        <h1 className="text-2xl text-white font-semibold">Renote</h1>
        <div>
          {!posting && (
            <button
              onClick={() => dispatch(posting_note())}
              className="shadow rounded bg-white px-4 py-2 text-blue-600 opacity-90 hover:opacity-100 duration-300"
            >
              Add New
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
