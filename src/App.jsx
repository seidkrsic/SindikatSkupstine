
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css'
import NavBarMain from './components/NavBarMain/NavBarMain';
import MainMenu from './components/MainMenu/MainMenu';
import Footer from './components/Footer/Footer';

function App() {
  return (
        <div className="App">
                <Router>
                <NavBarMain />
                <MainMenu />
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/clanovi" exact element={<HomePage />} />
                        <Route path="/aktuelnosti" exact element={<HomePage />} />
                        {/* <Route path="*" element={<NoMatch />} /> */}

                    </Routes>
                  <Footer />
                </Router>
        
        </div>

   
  );
}

export default App;
