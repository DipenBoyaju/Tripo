import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Career from "./Pages/Career/Career";
import Games from "./Pages/Games/Games";
import Privacy from "./Pages/Pp_Tc/Privacy";
import Terms from "./Pages/Pp_Tc/Terms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/games/kipon" element={<Games category="kipon" />} />
        <Route path="games/robotrix" element={<Games category="robotrix" />} />
        <Route
          path="games/treasurebox"
          element={<Games category="treasurebox" />}
        />
        <Route path="/Privacy_Policy" element={<Privacy />} />
        <Route path="/Terms_&_Conditions" element={<Terms />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
