import styles from "./Form1.module.css"
import { useRef } from "react";
import axios from "axios";
import swal from "sweetalert2";
import ContactusImage from "./ContactusImage";
import PhoneInput from "./PhoneInput";



const Form1 = () => {

    const nameEl = useRef();
    const emailEl = useRef();
    const locationEl = useRef();
    const phoneEl = useRef();
    const msgEl = useRef();

    const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone);


    const showAlert = (title, text, icon) => {
        swal.fire({
            title,
            text,
            icon,
            didOpen: () => {
                const confirmButton = document.querySelector('.swal2-confirm');
                if (confirmButton) {
                    confirmButton.style.backgroundColor = 'rgba(244, 145, 31, 1)';
                    confirmButton.style.color = '#fff';
                    confirmButton.style.borderRadius = '5px';
                    confirmButton.style.boxShadow = 'none';
                }
            }
        });
    };

    const handleContactus = async (e) => {
        e.preventDefault();

        const name = nameEl.current.value;
        const email = emailEl.current.value;
        const location = locationEl.current.value;
        const phone = phoneEl.current.value;
        const message = msgEl.current.value;

        if (!name || !validateName(name)) {
            showAlert("Error", "Please enter a valid name (letters and spaces only)", "info");
            return;
        }

        if (!email || !validateEmail(email)) {
            showAlert("Error", "Please enter a valid email address in the format 'example@domain.com' ", "info");
            return;
        }

        if (!location) {
            showAlert("Error", "Please enter your location", "info");
            return;
        }

        if (!phone || !validatePhone(phone)) {
            showAlert("Error", "Please enter a valid phone number", "info");
            return;
        }

        if (!message) {
            showAlert("Error", "Please enter your message", "info");
            return;
        }

        try {
            const result = await axios.post(`${import.meta.env.VITE_REACT_API_URL}/contactusform`, { name, email, location, phone, message });
            console.log(result.data.message)
            showAlert("Thank you for Contacting us!", "Our Team will Contact you", "success");

            nameEl.current.value = "";
            emailEl.current.value = "";
            locationEl.current.value = "";
            phoneEl.current.value = "";
            msgEl.current.value = "";

        } catch (err) {
            console.log(err);

        }
    };


    return (
        <div className="m-8 justify-items-center grid grid-cols-1 md:grid-cols-2">

            <ContactusImage />

            <div className="Form-container mt-6">
                <h1 className={styles.heading}>Have Questions? Contact us</h1>
                {/* <p>{import.meta.env.VITE_REACT_API_URL}/contactus</p> */}
                <p className={styles.para}>Not sure what you need? Our Team will be happy to listen to you and suggest event ideas you hadn’t considered</p>

                <form onSubmit={handleContactus}>
                    <div className={styles.horizontalInputContainer}>
                        <div className="name">
                            <div className={`mt-7 ${styles.nameContainer}`}>
                                <img className={styles.nameLogo} src="/Images/contact-us/name.svg" alt="Name" />
                                <label htmlFor="name" className={styles.fieldName}>Name</label>
                            </div>
                            <input ref={nameEl} type="text" id="name" className={styles.nameInput} />
                        </div>

                        <div className="email">
                            <div className={`mt-7 ${styles.nameContainer}`}>
                                <img className={styles.nameLogo} src="/Images/contact-us/email.svg" alt="Email" />
                                <label htmlFor="email" className={styles.fieldName}>Email Address</label>
                            </div>
                            <input ref={emailEl} id="email" type="text" className={styles.nameInput} />
                        </div>
                    </div>

                    <div className={styles.horizontalInputContainer}>
                        <div className="name">
                            <div className={`mt-5 ${styles.nameContainer}`}>
                                <img className={styles.nameLogo} src="/Images/contact-us/location.svg" alt="Location" />
                                <label htmlFor="location" className={styles.fieldName}>Location</label>
                            </div>
                            <input ref={locationEl} id="location" type="text" className={styles.nameInput} />
                        </div>

                        <div className="email">
                            <div className={`mt-5 ${styles.nameContainer}`}>
                                <img className={styles.nameLogo} src="/Images/contact-us/phone.svg" alt="Phone" />
                                <label htmlFor="phone" className={styles.fieldName}>Phone number</label>
                            </div>
                            {/* <input ref={phoneEl} id="phone" type="text" className={styles.nameInput} /> */}
                            <PhoneInput />
                        </div>
                    </div>

                    <div className="message">
                        <div className={`mt-5 ${styles.nameContainer}`}>
                            <img className={styles.nameLogo} src="/Images/contact-us/msg.svg" alt="Message" />
                            <label htmlFor="message" className={styles.fieldName}>Message</label>
                        </div>
                        <textarea ref={msgEl} className={styles.messageInput} id="message" name="message" rows="4"></textarea>
                    </div>

                    <button className={styles.submitBtn} type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Form1;