import HeaderApp from '~/layout/Header';
import BodyApp from '~/layout/Body';
import FooterApp from '~/layout/Footer';
import ScrollToTop from '~/components/ScrollToTop';

function App() {
    return (
        <div className="App">
            <HeaderApp />
            <BodyApp />
            <FooterApp />
            <ScrollToTop />
        </div>
    );
}

export default App;
