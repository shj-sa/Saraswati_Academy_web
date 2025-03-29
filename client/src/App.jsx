import { Route, Routes } from "react-router-dom";
import LandingPage from "./containers/Landing_Page";
import UserPage from "./components/TeachersPage/Schedule";
import LoginUser from "./containers/LoginMain";
import "./App.css";
import UploadFile from "./components/TeachersPage/uploadFile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/login" element={<LoginUser></LoginUser>}></Route>
      <Route path="/schedule" element={<UserPage></UserPage>}></Route>
      <Route path="/upload-file" element={<UploadFile></UploadFile>}></Route>
    </Routes>
  );
}

export default App;
