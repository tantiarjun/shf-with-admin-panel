
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Dailyactivites from "./Dailyactivites";
import Governance from "./Governance";
import Visibilty from "./Visibility";


const Work2 = () => {
    return <>
        <Header />
        <Herosection
            imageUrl="Images/contact-us/contactus.png"
            heading="Work with us"
            description="Home/ Work with us"
        />
        <Governance />
        <Dailyactivites />
        <Visibilty />
        <Footer />
    </>

}

export default Work2; 