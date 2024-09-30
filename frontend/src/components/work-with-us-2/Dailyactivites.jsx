import styles from "./Dailyactivites.module.css"
import Card from "./Card";

const Dailyactivites = () => {
    return (
        <>

            <h1 className={`font-bold text-4xl text-center  ${styles.heading}`}>Daily Activities</h1>

            <div className={styles.allcardcontainer}>
                <div className={`grid  grid-cols-1 md:grid-cols-3  ${styles.bgcontainer}`}>

                    <Card logo={"/Images/work-with-us-2/locala.svg"} title={"Local Volunteers"} para={
                        `Find The Nearest Hindu Community Project. Based on the Hindu Concept of "Sewa" -Selfless Service Hindu Organisations are giving back in many ways.`}
                    />

                    <Card logo={"/Images/work-with-us-2/regional.svg"} title={"Regional Projects"} para={
                        `Find The Nearest Hindu Community Project. Based on the Hindu Concept of "Sewa" -Selfless Service Hindu Organisations are giving back in many ways.`}
                    />

                    <Card logo={"/Images/work-with-us-2/international.svg"} title={"International Projects"} para={
                        `There are Global Challenges and the Hindu Ethos of Dharma and Karma are calls to action, & To Make the World a Safe and Better place.`}
                    />

                </div>

            </div>

        </>
    )
}

export default Dailyactivites;