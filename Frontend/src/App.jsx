import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import AcademicsPage from "./pages/AcademicsPage";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<AcademicsPage />} />
        {/* <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
