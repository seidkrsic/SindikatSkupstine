
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css'
import Footer from './components/Footer/Footer';
import MainMenuCopy from './components/MainMenuCopy/MainMenuCopy';
import StaffPage from './pages/StaffPage/StaffPage';
import StaffSinglePage from './pages/StaffSinglePage/StaffSinglePage';


function App() {
  return (
        <div className="App">
                <Router>             
                <MainMenuCopy />

                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/staff" exact element={<StaffPage />} />
                        <Route path="/staff/:id" exact element={<StaffSinglePage />} />
                        {/* <Route path="*" element={<NoMatch />} /> */}

                    </Routes>
                  <Footer />
                </Router>
        
        </div>

   
  );
}

export default App;
