import { Route, Routes } from "react-router-dom";
import LandingPage from "./containers/Landing_Page";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
    </Routes>
  );
}

export default App;
