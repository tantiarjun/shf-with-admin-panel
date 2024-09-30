import Footer from "../footer/Footer";
import Header from "../header/Header"
import Herosection from "../herosection/Herosection";
import Carddetails from "./Carddetails"

const Card = () => {
    return (
        <>
            <Header />
            <Herosection
                imageUrl="/Images/donate/donate.jpg"
                heading="Donate Now"
                description="Home/ Donate Now"
            />
            <Carddetails />
            <Footer />
        </>
    )
}

export default Card;