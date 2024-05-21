import Homepage from "./Componets/Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Componets/Common/Navigation";
import Footer from "./Componets/Common/Footer";
import SiteCreationPage from "./Componets/Pages/SiteCrationPage";
import Cookies from "./Componets/Common/Cookies";
import WordPressMaintance from "./Componets/Pages/WordPressMaintance";
import OurAchivmentsPage from "./Componets/Pages/OurAchivmentsPage";
import BlogPage from "./Componets/Pages/BlogPage";
import DateTime from "./Componets/Pages/ToStartUpPage";
import WebAgency from "./Componets/Pages/OurWebAgencyPage";
import UtilitiesSlider from "./Componets/UtilitiesSlider/UtilitiesSlider";
import IntroSlider from "./Componets/UtilitiesSlider/IntroSlider";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Site-Creation-Page" element={<SiteCreationPage />} />
        <Route path="/Word-Press-Maintance" element={<WordPressMaintance />} />
        <Route
          path="/Our-Wordpress-Achivments"
          element={<OurAchivmentsPage />}
        />
        <Route path="/Our-Blog" element={<BlogPage />} />
        <Route path="/Date-time" element={<DateTime />} />
        <Route path="/Our-Web-Agency" element={<WebAgency />} />
        {/* <Route path="/Utilities-Slider" element={<UtilitiesSlider />} />
        <Route path="/Intro-Slider" element={<IntroSlider />} /> */}
      </Routes>
      <Footer />
      <Cookies />
    </Router>
  );
}

export default App;
