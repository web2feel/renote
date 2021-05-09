import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllNotes } from "./Store/Notes/NoteSlice";
import "./App.css";
import Notes from "./Components/Notes";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNotes());
  }, []);

  return (
    <div className="App bg-gradient-to-b from-gray-50 to-gray-200">
      <Layout>
        <Header />
        <Notes />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
