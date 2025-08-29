import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Sources from "./pages/admin/Sources";
import AdminPanelHeader from "./components/AdminPanelHeader/AdminPanelHeader";
import Advertising from "./pages/admin/Advertising";
import Statistics from "./pages/admin/Statistics";

function App() {
  const location = useLocation();
  const adminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {adminRoute ? <AdminPanelHeader /> : <Header />}

      <div className="container mx-auto relative px-4 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin/sources" element={<Sources />} />
          <Route path="/admin/advert" element={<Advertising />} />
          <Route path="/admin/statistics" element={<Statistics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
