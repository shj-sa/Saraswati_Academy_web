import Navbar from "../components/HomePage/Sections/Navbar";
import Hero from "../components/HomePage/Sections/Hero";
import Features from "../components/HomePage/Sections/Features";
import HowItWorks from "../components/HomePage/Sections/HowItWorks";
import DemoGallery from "../components/HomePage/Sections/DemoGallery";
import Testimonials from "../components/HomePage/Sections/Testimonials";
import Footer from "../components/HomePage/Sections/Footer";
import "../style/landingpage.css";
import KnowYourFounder from "../components/HomePage/Sections/KnowAboutFounder";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section id="home" style={{ height: "fit-content" }}>
          <Hero />
        </section>
        <section id="about">
          <Features />
        </section>
        <section>
          <HowItWorks />
        </section>
        <section>
          <KnowYourFounder />
        </section>
        <section id="courses">
          <DemoGallery />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
