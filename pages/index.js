import styles from "../styles/Home.module.css"
import SideBar from "@/components/Sidebar/SideBar"
import { useEffect, useState } from "react"
import HomeSection from "@/components/Sections/HomeSection"
import AboutSection from "@/components/Sections/AboutSection"
import ResumeSection from "@/components/Sections/ResumeSection"
import ProjectsSection from "@/components/Sections/ProjectsSection"
import ContactSection from "@/components/Sections/ContactSection"
import ScrollBar from "@/components/ScrollBar/ScrollBar"

export default function Home() {
    const [activePage, setActivePage] = useState("home")
    const [previousPage, setPreviousPage] = useState("contact")

    useEffect(() => {
        if (activePage == "home") {
            setPreviousPage("contact")
        }
        if (activePage == "about") {
            setPreviousPage("home")
        }
        if (activePage == "resume") {
            setPreviousPage("about")
        }
        if (activePage == "projects") {
            setPreviousPage("resume")
        }
        if (activePage == "contact") {
            setPreviousPage("projects")
        }
    }, [activePage])
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
            <ScrollBar
                activePage={activePage}
                setActivePage={setActivePage}
                previousPage={previousPage}
                setPreviousPage={setPreviousPage}
            />
            <SideBar
                activePage={activePage}
                setActivePage={setActivePage}
                previousPage={previousPage}
                setPreviousPage={setPreviousPage}
            />
            <div className="section-container">
                <HomeSection
                    activePage={activePage}
                    setActivePage={setActivePage}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                />
                <AboutSection
                    activePage={activePage}
                    setActivePage={setActivePage}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                />
                <ResumeSection
                    activePage={activePage}
                    setActivePage={setActivePage}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                />
                <ProjectsSection
                    activePage={activePage}
                    setActivePage={setActivePage}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                />
                <ContactSection
                    activePage={activePage}
                    setActivePage={setActivePage}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                />
            </div>
        </div>
    )
}
