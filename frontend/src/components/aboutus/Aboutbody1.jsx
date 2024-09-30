const Aboutbody1 = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 sm:px-32 mt-12">
      <img
        className="object-cover w-full md:w-1/2 rounded-lg md:rounded-none"
        src="\Images\aboutus\about-image-12.png"
        alt="pic"
      />
      <div className="flex flex-col p-4 md:p-8 space-y-3">
        <p className="text-gray-700 text-sm font-semibold">The Journey So far</p>
        <h1 className="text-3xl font-bold">HINDUS IN SCOTLAND</h1>
        <p className="text-gray-700 font-bold">Welcome to the official website of the Scottish Hindu Foundation! We are thrilled to have you here.</p>
        <p className="text-gray-700">
          Our organization is dedicated to preserving and promoting the vibrant
          tapestry of Hindu culture in Scotland.We bridge the gap between the
          Hindu community and the wider Scottish society, fostering
          understanding and cultural exchange. Through festivals, seminars,
          workshops, and educational programs, we provide opportunities for
          individuals to explore the richness of Hinduism.We also offer support
          services to empower the Hindu community and ensure their needs are
          met. Join us in celebrating diversity, fostering harmony, and
          embracing a brighter future for Scotland.
        </p>
      </div>
    </div>
  );
};

export default Aboutbody1;
