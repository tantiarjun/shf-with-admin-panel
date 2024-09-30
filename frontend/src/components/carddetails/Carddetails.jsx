import styles from "./Carddetails.module.css"

const Carddetails = () => {
    return (
        <div className={styles.bgContainer}>

            <div className={styles.cardConatiner}>
                <h1 className={styles.heading}>Enter Card Details</h1>
                <form action="" className={styles.formContainer}>
                    <div className=" grid grid-cols-1 md:grid-cols-2  mt-10 ">

                        <div className={styles.nameCardContainer}>
                            <div className="mt-4 inputContainer">
                                <label for="name" className={styles.inputName}>Name</label>
                                <input id="name" type="text" className={styles.nameInputField} required />
                            </div>

                            <div className=" mt-4 inputContainer">
                                <label for="cardno" className={styles.inputName}>Card number</label>
                                <input id="cardno" type="text" className={styles.nameInputField} required />
                            </div>
                        </div>

                        <div className={styles.expiryCVVContainer}>
                            <div className=" mt-4 inputContainer">
                                <label for="date" className={styles.inputName}>Expiration Date</label>
                                <input id="date" type="date" className={styles.nameInputField} required />
                            </div>

                            <div className=" mt-4 inputContainer">
                                <label for="cvv" className={styles.inputName}>CVV</label>
                                <input id="cvv" type="text" className={styles.nameInputField} required />
                            </div>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.cancelBtn} >Cancel</button>
                            <button className={styles.submitBtn} >Submit</button>
                        </div>


                    </div>

                </form>
            </div>

        </div>
    )
}

export default Carddetails