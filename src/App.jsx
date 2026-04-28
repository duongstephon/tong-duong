import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./Components/Home/Home";
import SaveTheDate from "./Components/SaveTheDate/SaveTheDate";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import ThankYou from "./Components/ThankYou/ThankYou";
import OurStory from "./Components/OurStory/OurStory";
import Details from "./Components/Details/Details";
import Faq from "./Components/Faq/Faq";

// 👇 This component is INSIDE Router, so useLocation works
function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <Navigation />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/weddingdetails" element={<Details />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout /> {/* 👈 IMPORTANT: Layout is inside Router */}
    </Router>
  );
}

export default App;
