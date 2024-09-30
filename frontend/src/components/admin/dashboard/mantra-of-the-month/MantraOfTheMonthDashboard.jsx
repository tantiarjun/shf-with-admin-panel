// import React, { useState, useEffect } from 'react';
// import styles from './MantraOfTheMonthDashboard.module.css';
// import axios from 'axios';

// const MantraOfTheMonthDashboard = () => {


//     const [selectedMonth, setSelectedMonth] = useState('');
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const currentMonth = new Date().toLocaleString('default', { month: 'long' });
//         setSelectedMonth(currentMonth);
//     }, []);

//     const handleMonthChange = (event) => {
//         setSelectedMonth(event.target.value);
//     };


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/mantra');
//                 const mantraArry = response.data;
//                 mantraArry.map(item => {
//                     if (item.month === selectedMonth) {
//                         setData(item)
//                     }
//                 })
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     });


//     return (
//         <div className={styles.mantraContainer}>
//             <div className={styles.mantraSection}>
//                 <div className="flex">
//                     <p className={`mr-5 ${styles.textevents}`}>Mnatra of the Month</p>
//                     <form action="">
//                         <select
//                             name=""
//                             id=""
//                             className={styles.MonthButton}
//                             value={selectedMonth}
//                             onChange={handleMonthChange}
//                         >
//                             <option value="January">January</option>
//                             <option value="February">February</option>
//                             <option value="March">March</option>
//                             <option value="April">April</option>
//                             <option value="May">May</option>
//                             <option value="June">June</option>
//                             <option value="July">July</option>
//                             <option value="August">August</option>
//                             <option value="September">September</option>
//                             <option value="October">October</option>
//                             <option value="November">November</option>
//                             <option value="December">December</option>
//                         </select>
//                     </form>
//                 </div>

//                 <div className={styles.imageAndMantra}>
//                     <div>
//                         <div className="h-28 w-28 md:h-28 md:w-28 rounded-full overflow-hidden mb-5 md:mb-0 ">
//                             <img
//                                 className="w-full h-full object-cover "
//                                 src={data.photoUrl || "./Images/admin/dashboard/mantra/mantra.jpg"}
//                                 alt="lord-krishna-photo"
//                             />
//                         </div>
//                     </div>

//                     <p className="ml-5 text-center mt-5 md:mt-0  mantra-of-month">
//                         {data.textContent || "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.” ― Bhagavad Gita"}
//                     </p>
//                 </div>


//             </div>


//         </div>
//     );
// };

// export default MantraOfTheMonthDashboard;


import React, { useState, useEffect } from 'react';
import styles from './MantraOfTheMonthDashboard.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MantraOfTheMonthDashboard = () => {


    const [selectedMonth, setSelectedMonth] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        setSelectedMonth(currentMonth);
    }, []);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/mantra');
                const mantraArry = response.data;
                mantraArry.map(item => {
                    if (item.month === selectedMonth) {
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
        <div className={styles.mantraContainer}>
            <div className={styles.mantraSection}>
                <div className="flex justify-between">
                    <div className='flex'>
                        <p className={`mr-5 ${styles.textevents}`}>Mantra of the Month</p>
                        <form action="">
                            <select
                                name=""
                                id=""
                                className={`${styles.MonthButton}`}
                                value={selectedMonth}
                                onChange={handleMonthChange}
                            >
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </form>
                    </div>

                    <Link to='/mantra-of-the-month'>
                        <button className=' text-sm border-[1px] px-6  py-[1px] border-[#F4911F] text-[#F4911F] rounded-lg' >Edit</button>
                    </Link>
                </div>

                <div className={styles.imageAndMantra}>


                    <div>
                        <div className="h-28 w-28 md:h-28 md:w-28">
                            <img
                                className={`w-full h-full object-cover ${data && styles.mantraImage}`}
                                src={data && data.photoUrl}
                                alt="image"
                            />
                        </div>
                    </div>


                    <p className="ml-5 text-center mt-5 md:mt-0  mantra-of-month">
                        {data && data.textContent}
                    </p>



                </div>

            </div>


        </div>
    );
};

export default MantraOfTheMonthDashboard;







