import Footer from "../components/Landing/Footer";
import FAQsection from "../components/Landing/FAQsection";
import Navbar from "../components/Landing/NavBar";
import TopSection from "../components/Landing/TopSection";
import "../style/landingpage.css";
import WhyUs from "../components/Landing/WhyUs";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section
          id="home"
          style={{ height: "fit-content", marginTop: "100px" }}
        >
          <TopSection />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="faq">
          <FAQsection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
