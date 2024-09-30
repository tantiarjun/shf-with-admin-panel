import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Form from "./Form";
import Join from "./Join";


const Work = () => {
    return (
        <>
            <Header />
            <Herosection
                imageUrl="Images/contact-us/contactus.png"
                heading="Work with us"
                description="Home/ Work with us"
            />
            <Join />
            <Form />
            <Footer />

        </>

    )
}

export default Work; 