
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css'
import Footer from './components/Footer/Footer';
import MainMenuCopy from './components/MainMenuCopy/MainMenuCopy';
import StaffPage from './pages/StaffPage/StaffPage';
import StaffSinglePage from './pages/StaffSinglePage/StaffSinglePage';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsSinglePage from './pages/NewsSinglePage/NewsSinglePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { createContext, useEffect, useState } from 'react';
import Session from './pages/Session/Session';
import ContactPage from './pages/ContactPage/ContactPage';
import ListDocumentsPage from './pages/ListDocumentsPage/ListDocumentsPage';
import LogoOnly from './components/LogoOnly/LogoOnly';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import AuthContext, { AuthProvider } from './Context/AuthContext';
import SearchPage from './pages/SearchPage/SearchPage';
import Company from './pages/Company/Company';



function App() {

  const [ShowLogo, setShowLogo] = useState(true)

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
                    {ShowLogo? <LogoOnly /> : <> </>  } 
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/news/predsjednik" element={<NewsPage />} />
                        <Route path="/news/zamjenikPredsjednika" element={<NewsPage />} />
                        <Route path="/news/sekretar" element={<NewsPage />} />
                        <Route path="/news/:id" element={<NewsSinglePage />} />
                        <Route path="/staff" element={<StaffPage />} />
                        <Route path="/staff/izvrsniodbor" element={<StaffPage />} />
                        <Route path="/staff/komisija" element={<StaffPage />} />
                        <Route path="/staff/predsjednici" element={<StaffPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route element={<PrivateRoutes />} >
                            <Route path="/documents" element={<ListDocumentsPage />} />
                        </Route>
                        <Route path="/pogodnosti" element={<Company />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/session/skupstina" element={<Session />} />
                        <Route path="/session/izvrsni_odbor" element={<Session />} />
                        <Route path="/session/skupstina/:id" element={<Session />} />
                        <Route path="/session/izvrsni_odbor/:id" element={<Session />} />
                        <Route path="/staff/:id" element={<StaffSinglePage />} />
                        <Route path="/staff/predsjednik" element={<StaffSinglePage />} />
                        <Route path="/staff/zamjenikPredsjednika" element={<StaffSinglePage />} />
                        <Route path="/staff/generalniSekretar" element={<StaffSinglePage />} />

                        

                    </Routes>

                  <Footer />
                </AuthProvider>
                </Router>
        
        </div>

   
  );
}

export default App;
