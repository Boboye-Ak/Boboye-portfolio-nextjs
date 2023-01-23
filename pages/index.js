import styles from "../styles/Home.module.css"
import SideBar from "@/components/Sidebar/SideBar"
import { useEffect, useState } from "react"
import HomeSection from "@/components/Sections/HomeSection"
import AboutSection from "@/components/Sections/AboutSection"
import ResumeSection from "@/components/Sections/ResumeSection"
import ProjectsSection from "@/components/Sections/ProjectsSection"
import ContactSection from "@/components/Sections/ContactSection"

export default function Home() {
    const [activePage, setActivePage] = useState("home")
    const handleEnterButton = () => {
        if (activePage == "home") {
            setActivePage("about")
        }
        if (activePage == "about") {
            setActivePage("resume")
        }
        if (activePage == "resume") {
            setActivePage("projects")
        }
        if (activePage == "projects") {
            setActivePage("contact")
        }
        if (activePage == "contact") {
            setActivePage("home")
        }
    }

    return (
        <div className={styles.main}>
            <SideBar activePage={activePage} setActivePage={setActivePage} />
            <div className="section-container">
                <HomeSection activePage={activePage} setActivePage={setActivePage} />
                <AboutSection activePage={activePage} setActivePage={setActivePage} />
                <ResumeSection activePage={activePage} setActivePage={setActivePage} />
                <ProjectsSection activePage={activePage} setActivePage={setActivePage} />
                <ContactSection activePage={activePage} setActivePage={setActivePage} />
            </div>
        </div>
    )
}
