import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./ContactusImage.module.css";

const ContactusImage = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const fetchImageUrl = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/contactusimage");
                const imageUrl = response.data[response.data.length - 1]?.url;
                setImageUrl(imageUrl);
            } catch (error) {
                console.error("Error fetching the image URL:", error);
            }
        };

        fetchImageUrl();
    });

    return (
        <div className="image-container mt-5 mb-2">
            <div className={styles.imageContainer}>
                <div className="flex justify-center">
                    <img className={styles.girlImage} src={imageUrl || "/Images/contact-us/Rectangle 3041.png"} alt="image" />
                </div>
                <div className="flex mt-5 items-center justify-center ml-7">
                    <img className={`mt - 1 ${styles.nameLogo}`} src="/Images/contact-us/email.svg" alt="Email" />
                    <a className="ml-2 underline" href="mailto:info@scottishhindufoundation.com" target="_blank" rel="noopener noreferrer">info@scottishhindufoundation</a>
                </div>
            </div>
        </div>
    );
};

export default ContactusImage;