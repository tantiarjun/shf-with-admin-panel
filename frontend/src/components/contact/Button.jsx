import styles from "./Button.module.css"
const Button = ({ templeName, handleButton, isActive }) => {
    return (
        <button className={`active ${styles.tempelName} ${isActive && styles.bgColor}`}
            onClick={handleButton}
        >{templeName}</button>

    )
}

export default Button;