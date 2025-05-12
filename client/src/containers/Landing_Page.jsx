import Footer from "../components/Landing/Footer";
import FAQsection from "../components/Landing/FAQsection";
import Navbar from "../components/Landing/NavBar";
import TopSection from "../components/Landing/TopSection";
import "../style/landingpage.css";
import WhyUs from "../components/Landing/WhyUs";
import Testimonials from "../components/Landing/TestimonialsComp";
import Wrapper from "./Wrapper";
import CallbackSection from "../components/ui/CallbackComp";
const LandingPage = () => {
  return (
    <Wrapper>
      <section
        id="home"
        className="keyselling-color"
        style={{ height: "fit-content", marginTop: "96px" }}
      >
        <TopSection />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>

      <section id="testimonials">
        <Testimonials></Testimonials>
      </section>
      <CallbackSection></CallbackSection>
      <section id="faq">
        <FAQsection />
      </section>
    </Wrapper>
  );
};

export default LandingPage;
