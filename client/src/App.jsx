import { Route, Routes } from "react-router-dom";
import LandingPage from "./containers/Landing_Page";
import EnquiryPage from "./lib/EnquieryForm";
import "./App.css";
import ContactSection from "./containers/ContactSection";
import TestimonialsPage from "./containers/TestimonialPage";
import CoursesPage from "./components/courses/main";
import Resource from "./containers/Resources";
import MediaSection from "./containers/MediaSection";
import HiringSection from "./containers/HiringSection";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/enquiry" element={<EnquiryPage></EnquiryPage>}></Route>
      <Route path="/contact" element={<ContactSection />}></Route>
      <Route path="/testimonials" element={<TestimonialsPage />}></Route>
      <Route path="/courses" element={<CoursesPage />}></Route>
      <Route path="/resources" element={<Resource />}></Route>
      <Route path="/media" element={<MediaSection />}></Route>
      <Route path="/hiring" element={<HiringSection />}></Route>
    </Routes>
  );
}

export default App;
