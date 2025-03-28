import { Route, Routes } from "react-router-dom";
import LandingPage from "./containers/Landing_Page";
import LoginUser from "./containers/LoginMain";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/login" element={<LoginUser></LoginUser>}></Route>
    </Routes>
  );
}

export default App;
