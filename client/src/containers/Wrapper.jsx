import Footer from "../components/Landing/Footer";
import Navbar from "../components/Landing/NavBar";
const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
