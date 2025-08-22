import { Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header/Header";
import Home from "./pages/home";
import LogIn from "./pages/auth/logIn";
import SignIn from "./pages/auth/signIn";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto relative px-4 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        {/* <span className="px-2 py-1 mr-2 text-xs font-semibold text-white bg-green-500 rounded-full">
          Pro
        </span>
        <span className="px-2 py-1 mr-2 text-xs font-semibold text-gray-800 bg-gray-300 rounded-full">
          Free
        </span> */}
      </div>
    </>
  );
}

export default App;
