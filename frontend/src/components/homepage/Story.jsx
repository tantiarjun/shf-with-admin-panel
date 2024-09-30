// const Story = () => {
//   return (
//     <div className="flex flex-col md:flex md:flex-row justify-between">
//       <div className="relative w-64 h-64">
//         {/* Base image */}
//         <img
//           src="/Images/homepage/card-1-1.jfif"
//           alt="Base"
//           className="w-2/3 h-2/3 object-cover"
//         />

//         {/* Overlay image */}
//         <img
//           src="/Images/homepage/card-1-2.jfif"
//           alt="Overlay"
//           className="absolute w-3/5 h-3/5 bottom-0 right-0 object-cover"
//         />
//       </div>

//       <div className="flex flex-col p-4 md:p-8 space-y-4">
//         <p className="text-gray-700">A journey, A Story</p>
//         <h1 className="text-2xl font-bold">HINDUS IN SCOTLAND</h1>
//         <p className="text-gray-700">
//           Our Organisation Is Dedicated To Preserving And Promoting The Vibrant
//           Tapestry Of Hindu Culture In Scotland We Bridge The Gap Between The
//           Hindu Community And The Wider Scottish Society, Fostering
//           Understanding And Cultural Exchange. The Convergence Of Scottish Ethos
//           And Hinduism Reflects A Fascinating Interplay Between Two Rich And
//           Diverse Cultural Traditions, Scottish Ethos, Characterized By
//           Resilience, Tenacity, And A Deep Sense Of Community, Finds Resonance
//           With The Profound Spiritual Teachings And Vibrant Rituals Of Hinduism.
//           This Unique Amalgamation Creates A Harmonious Tapestry, Blending
//           Elements Of Heritage, Spirituality And Collective Identity.
//         </p>
//         <button className="bg-orange-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none">
//           more about us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Story;
const Story = () => {

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 sm:px-32 mt-12">
      <div className="relative w-64 h-64">
   {/* Base image */}
         <img
           src="/Images/homepage/card-1-1.jfif"
          alt="Base"
         className="w-2/3 h-2/3 object-cover"
        />

        {/* Overlay image */}
       <img
          src="/Images/homepage/card-1-2.jfif"
          alt="Overlay"
          className="absolute w-3/5 h-3/5 bottom-0 right-0 object-cover"
        />
     </div>
      <div className="flex flex-col p-4 md:p-8 space-y-3 md:w-1/2 lg:w-2/3 justify-center">
        <hr className="w-[100px] border-t-1 border-gray-400" />
        <p className="text-gray-700 text-md font-semibold">A journey, A Story</p>
        <h1 className="text-3xl font-bold">HINDUS IN SCOTLAND</h1>
        <p className="text-gray-700">
          Our Organisation Is Dedicated To Preserving And Promoting The Vibrant
          Tapestry Of Hindu Culture In Scotland We Bridge The Gap Between The
          Hindu Community And The Wider Scottish Society, Fostering
          Understanding And Cultural Exchange. The Convergence Of Scottish Ethos
          And Hinduism Reflects A Fascinating Interplay Between Two Rich And
          Diverse Cultural Traditions, Scottish Ethos, Characterized By
          Resilience, Tenacity, And A Deep Sense Of Community, Finds Resonance
          With The Profound Spiritual Teachings And Vibrant Rituals Of Hinduism.
          This Unique Amalgamation Creates A Harmonious Tapestry, Blending
          Elements Of Heritage, Spirituality And Collective Identity.
        </p>
        <button className="bg-orange-500 hover:bg-purple-950 font-base text-white py-1 px-3  focus:outline-none w-fit">
          More About Us
        </button>
      </div>
    </div>
  );
};

export default Story;
