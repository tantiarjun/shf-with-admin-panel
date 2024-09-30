const Herosection = ({ imageUrl, heading, description }) => {
    return (
      <div className="relative w-full h-[250px] overflow-hidden">
        <img
          src={imageUrl}
          alt="Image description"
          className="w-full h-full object-cover object-center absolute top-0 left-0 
          saturate-100 blur-sm mix-blend-difference"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50 z-10"></div>
        <div className="absolute inset-y-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{heading}</h1>
          <p className="text-xl text-white">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Herosection;