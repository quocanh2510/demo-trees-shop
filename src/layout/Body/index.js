import Feedback from './Feedback';
import Introduce from './Introduce';
import Offer from './Offer';
import Products from './Products';
import ShippingArea from './ShippingArea';
import Slide from './Slide';

function BodyApp() {
    return (
        <div id="body-app">
            <Slide />
            <Introduce />
            <ShippingArea />
            <Products />
            <Feedback />
            <Offer />
        </div>
    );
}

export default BodyApp;
