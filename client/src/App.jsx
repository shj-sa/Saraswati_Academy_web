import { Route, Routes } from "react-router-dom";
import LandingPage from "./containers/Landing_Page";
import "./App.css";
import ContactSection from "./containers/ContactSection";
import TestimonialsPage from "./containers/TestimonialPage";
import CoursesPage from "./components/courses/main";
import Resource from "./containers/Resources";
import MediaSection from "./containers/MediaSection";
import HiringSection from "./containers/HiringSection";
import NavigationBar from "./constants/Navigation_Bar.json";
import axios from "axios";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const awake = async () => {
      try {
        await axios.get(`${import.meta.env.REACT_APP_API_URL}`);
      } catch (error) {
        console.error("Wakeup ping failed:", error);
      }
    };
    awake();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      {NavigationBar.Contact.present && (
        <Route path="/contact" element={<ContactSection />}></Route>
      )}
      {NavigationBar.Testimonials.present && (
        <Route path="/testimonials" element={<TestimonialsPage />}></Route>
      )}
      {NavigationBar.Courses.present && (
        <Route path="/courses" element={<CoursesPage />}></Route>
      )}
      {NavigationBar.Resources.present && (
        <Route path="/resources" element={<Resource />}></Route>
      )}
      {NavigationBar.Media.present && (
        <Route path="/media" element={<MediaSection />}></Route>
      )}
      {NavigationBar.JoinUs.present && (
        <Route path="/hiring" element={<HiringSection />}></Route>
      )}
      <Route path="/*" element={<LandingPage />}></Route>
    </Routes>
  );
}

export default App;
