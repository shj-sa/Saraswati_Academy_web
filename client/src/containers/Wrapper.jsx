import Footer from "../components/Landing/Footer";
import Navbar from "../components/Landing/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ToastContainer></ToastContainer>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
