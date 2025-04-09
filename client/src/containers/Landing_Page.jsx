import Footer from "../components/Landing/Footer";
import FAQsection from "../components/Landing/FAQsection";
import Navbar from "../components/Landing/NavBar";
import "../style/landingpage.css";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section
          id="home"
          style={{ height: "fit-content", marginTop: "100px" }}
        >
          <FAQsection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
