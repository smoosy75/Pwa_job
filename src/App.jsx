import "./App.css";
import JobBoard from "./components/Jobboard";
import Navbar from "./components/Navbar";
import NotificationsButton from "./components/NotificationsButton";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 bg-blue-800 text-white flex justify-between items-center shadow-lg mb-10">
        <h1 className="text-3xl font-extrabold">Bienvenue sur JobBoard</h1>
      </div>
      <JobBoard />
    </div>
  );
}

export default App;
