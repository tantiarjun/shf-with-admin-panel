import { useState, useRef } from "react";
import Button from "./Button";
import styles from "./Contactus.module.css";
import Map from "./Map";
import Form1 from "./Form1";

const Contactus = () => {
    const templeList = [
        "Hindu Mandir Glasgow", "Aberdeen Hindu Temple", "Edinburgh Hindu Mandir & Cultural Centre",
        "Tayside Hindu Cultural Community Centre", "Mother Earth Hindu Temple",
        "Sri Mangala Vinayagar Hindu Temple &..", "Pashupati Nath Temple", "ISKCON Karuna Bhavan Temple"
    ];

    const [activeItems, setActiveItems] = useState("Hindu Mandir Glasgow");

    const handleButton = (item) => setActiveItems(item);

    return (


        <div className={styles.ContactUsContainer}>

            <Form1 />

            <h1 className={styles.tepleinscotland}>Temples in Scotland</h1>
            <h1 className={`mb-5 ${styles.ouraddress}`}>Our Address</h1>

            <div className={styles.buttonContainer}>
                {templeList.map(item => (
                    <Button key={item} templeName={item} handleButton={() => handleButton(item)} isActive={activeItems === item} />
                ))}
            </div>

            <div className={styles.addresName}>
                <div className="flex">
                    <p className={styles.bar}></p>
                    <p className={styles.templeName}>{activeItems}</p>
                </div>
                <p className={styles.templeAddress}>1 La Belle Pl, Glasgow G3 7LH</p>
                <p className={styles.templeNo}>0141 332 0482</p>
            </div>

            <Map mapName={activeItems} />

        </div>
    );
}

export default Contactus;
