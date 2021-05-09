import PostPic from "../assets/undraw_post.svg"
function IntroNote() {
  return (
    <div className="max-w-screen-xl mx-auto py-6">
      <div className="bg-white p-6 rounded-lg text-center text-xl shadow">
        <h1 className="text-4xl mt-12 mb-2 font-bold">Welcome to Renote</h1>
        <p className="text-gray-500 mb-12">An offline note taking app built with ReactJS</p>
        <div className="max-w-md mx-auto mb-12">
        <img src={PostPic} alt="Post a note"/>
        </div>
        
      </div>
    </div>
  );
}

export default IntroNote;
