
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
import { useEffect, useState } from 'react';
import Session from './pages/Session/Session';
import ContactPage from './pages/ContactPage/ContactPage';
import ListDocumentsPage from './pages/ListDocumentsPage/ListDocumentsPage';


function App() {


  return (
        <div className="App">
                <Router>  
                    <MainMenuCopy />       
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/news" element={<NewsPage />} />
                        <Route path="/news/:id" element={<NewsSinglePage />} />
                        <Route path="/staff" element={<StaffPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/documents" element={<ListDocumentsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/session" element={<Session />} />
                        <Route path="/staff/:id" element={<StaffSinglePage />} />

                        {/* <Route path="*" element={<NoMatch />} /> */}

                    </Routes>

                  <Footer />
                </Router>
        
        </div>

   
  );
}

export default App;
