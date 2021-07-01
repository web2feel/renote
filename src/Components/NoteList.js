import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";
import NoteForm from "./NoteForm";

import Loader from "./Loader";
function NoteList() {
  const { data, loading, error, posting } = useSelector((state) => state.notes);

  if (loading) {
    return (
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-screen-xl mx-auto py-12">
        <div className="bg-red-100 border border-red-300 p-6 rounded-lg text-center text-red-700 text-xl shadow-md">
          Something went wrong!
          <p>{error}</p>
        </div>
      </div>
    );
  }
  return (
    
    <div className="max-w-screen-xl mx-auto flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {posting && <NoteForm />}
        {data &&
          data.map((item) => {
            return (
              <NoteItem
                key={item.id}
                date={item.date}
                id={item.id}
                title={item.title}
                content={item.content}
              />
            );
          })}
      </div>
    </div>
  );
}

export default NoteList;
