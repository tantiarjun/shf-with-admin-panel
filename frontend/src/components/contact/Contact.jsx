import Contactus from "./Contactus";
import Header from "../header/Header"
import Herosection from "../herosection/Herosection"
import Footer from "../footer/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <Herosection
                imageUrl="Images/contact-us/contactus.png"
                heading="Contact Us"
                description="Home/ Contact Us"
            />
            <Contactus />
            <Footer />
        </>



    )
}

export default Contact;