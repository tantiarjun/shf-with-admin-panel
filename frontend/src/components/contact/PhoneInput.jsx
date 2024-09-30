import React, { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const PhoneInput = () => {
    const phoneInputRef = useRef(null);

    useEffect(() => {
        const phoneInput = phoneInputRef.current;

        const iti = intlTelInput(phoneInput, {
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                fetch("https://ipinfo.io/json?token=<your_token>") // Replace <your_token> with your actual token
                    .then((response) => response.json())
                    .then((data) => callback(data.country))
                    .catch(() => callback("in")); // Default to US if there's an error
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            autoPlaceholder: "aggressive",
            separateDialCode: true,
        });

        phoneInput.addEventListener("blur", () => {
            const isValid = iti.isValidNumber();
            // if (!isValid) {
            //     alert("Invalid phone number");
            // }
        });

        return () => {
            iti.destroy();
        };
    }, []);

    return (
        <input
            ref={phoneInputRef}
            type="tel"
            placeholder=""
        // style={{ width: "300px", padding: "10px" }}
        />
    );
};

export default PhoneInput;
