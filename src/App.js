import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '~/pages/Home';
import BlogPage from '~/pages/Blog';
import AboutPage from '~/pages/About';
import ContactPage from '~/pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
