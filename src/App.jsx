import "./App.css";
import JobBoard from "./components/Jobboard";
import Navbar from "./components/Navbar";
import NotificationsButton from "./components/NotificationsButton";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 flex flex-col justify-center text-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-3xl font-extrabold mb-4">Bienvenue sur JobBoard</h1>
        <div className="p-4 w-full max-w-md"></div>
      </div>
      <JobBoard />
    </div>
  );
}

export default App;
