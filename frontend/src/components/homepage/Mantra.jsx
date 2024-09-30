import axios from "axios";
import { useEffect, useState } from "react";

const Mantra = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/mantra');
        const mantraArry = response.data;
        mantraArry.map(item => {
          if (item.month === new Date().toLocaleString('default', { month: 'long' })) {
            setData(item)
          }
        })
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  });

  return (

    <div className="w-full bg-shfOrange flex flex-col justify-center items-center text-white py-8 px-4 space-y-6">
      <h1 className="text-md md:text-lg font-normal">Mantra Of The Month</h1>

      <div className="h-28 w-28 md:h-28 md:w-28 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={data.photoUrl || "/Images/krishna-geeta.jpeg"}
          alt="lord-krishna-photo"
        />
      </div>

      <div className="w-full px-8 md:px-64">
        <p className="text-center text-sm font-thin md:text-md mb-8">
          {data.textContent || "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.” ― Bhagavad Gita"}
        </p>
      </div>
    </div>

  );
};

export default Mantra;