import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Masonrygallery from "./Masonrygallery";

const Gallery = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="\Images\Herosection\gallery.png"
        heading="Gallery"
        description="Home/ Gallery"
      />
<div className="px-3 py-2 md:px-40 md:py-4">
      <Masonrygallery/>
    </div>
      


      <Footer />
    </div>
  );
};

export default Gallery;
