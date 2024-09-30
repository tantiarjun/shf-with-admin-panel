import React, { useState } from "react";
import styles from "./AdminWorkWithUs1.module.css";
import AdminHeader from "../../header/AdminHeader";
import Sidebar from "../../sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import WorkWithUs1 from "./WorkWithUs1";


const AdminWorkWithUs1 = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = (e) => {
        setIsSidebarOpen(false);

    };

    return (
        <div className={styles.sidebarAndRightbarContainer}>

            <div className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.showSidebar : ""}`}>
                {isSidebarOpen && (
                    <AiOutlineClose className={styles.closeIcon} onClick={toggleSidebar} />
                )}
                <Sidebar onNavItemClick={closeSidebar} className={styles.sidebarmain} />
            </div>

            <div className={styles.rightBar}>
                <div className={styles.logoNavbarContainer}>
                    <img src="./Images/admin/shf-logo.svg" alt="Logo" />
                    <HiOutlineMenu className={styles.navbar} onClick={toggleSidebar} />
                </div>

                <AdminHeader navName="Pages- Work with us" />
                <WorkWithUs1 />

            </div>
        </div>
    );
};

export default AdminWorkWithUs1;



