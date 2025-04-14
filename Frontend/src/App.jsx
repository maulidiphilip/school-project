import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./components/AuthPage";
import EventDetails from "./pages/EventDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
