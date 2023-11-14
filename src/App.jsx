import { useEffect, useState } from "react";
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import LogoOnly from "./components/LogoOnly/LogoOnly";
import MainMenuCopy from "./components/MainMenuCopy/MainMenuCopy";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import { AuthProvider } from "./Context/AuthContext";
import Company from "./pages/Company/Company";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import ListDocumentsPage from "./pages/ListDocumentsPage/ListDocumentsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsSinglePage from "./pages/NewsSinglePage/NewsSinglePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Session from "./pages/Session/Session";
import StaffPage from "./pages/StaffPage/StaffPage";
import StaffSinglePage from "./pages/StaffSinglePage/StaffSinglePage";
import LawsPage from "./pages/LawsPage/LawsPage"
import SkupstinaPage from "./pages/SkupstinaPage/SkupstinaPage";

function App() {
  const [ShowLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // After 3 seconds, switch to showing the actual site content
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, 1000);

    return () => {
      clearTimeout(timeout); // Clear the timeout if component unmounts
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <MainMenuCopy />
          {ShowLogo ? <LogoOnly /> : <> </>}
          <Layout>
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/news/predsjednik" element={<NewsPage />} />
              <Route path="/news/zamjenikPredsjednika" element={<NewsPage />} />
              <Route path="/news/:id" element={<NewsSinglePage />} />
              <Route path="/zakoni/akti_sindikata" element={<LawsPage />} />
              <Route path="/zakoni/opsti_akti" element={<LawsPage />} />
              <Route path="/zakoni/formulari" element={<LawsPage />} />
              <Route path="/saziv/izvrsniodbor" element={<StaffPage />} />
              <Route path="/saziv/nadzorniodbor" element={<StaffPage />} />
              <Route path="/saziv/komisija" element={<StaffPage />} />
              <Route path="/saziv/predsjednici" element={<StaffPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/documents" element={<ListDocumentsPage />} />
              </Route>
              <Route path="/pogodnosti" element={<Company />} />
              <Route path="/skupstina" element={<SkupstinaPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/session/skupstina" element={<Session />} />
              <Route path="/session/izvrsni_odbor" element={<Session />} />
              <Route path="/session/skupstina/:id" element={<Session />} />
              <Route path="/session/izvrsni_odbor/:id" element={<Session />} />
              <Route path="/saziv/:id" element={<StaffSinglePage />} />
              <Route path="/saziv/predsjednik" element={<StaffSinglePage />} />
              <Route
                path="/saziv/zamjenikPredsjednika"
                element={<StaffSinglePage />}
              />
              {/* <Route
                path="/saziv/generalniSekretar"
                element={<StaffSinglePage />}
              /> */}
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
