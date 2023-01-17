import styles from "../styles/Home.module.css"
import SideBar from "@/components/Sidebar/SideBar"

export default function Home() {
    return (
        <div className={styles.main}>
            <SideBar />
        </div>
    )
}
