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
    const [showInstructions, setShowInstructions] = useState(true)
    const [activePage, setActivePage] = useState("home")
    const [previousPage, setPreviousPage] = useState("contact")
    const handleEnterButton = () => {
        if (!showInstructions) {
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
    }

    const handleUpButton = () => {
        setActivePage(previousPage)
    }
    useEffect(() => {
        let timeout
        const isVisitedFromStorage = localStorage.getItem("isVisited")
        if (!isVisitedFromStorage) {
            timeout = 5000
            localStorage.setItem("isVisited", "true")
        } else {
            timeout = 0
        }

        setTimeout(() => {
            setShowInstructions(false)
        }, timeout)
    }, [])

    useEffect(() => {
        const keyDownHandler = (event) => {
            if (event.key === "Enter" || event.code === "Space" || event.keyCode == 40) {
                handleEnterButton()
            }
            if (event.keyCode == 38) {
                handleUpButton()
            }
        }

        document.addEventListener("keydown", keyDownHandler)

        return () => {
            document.removeEventListener("keydown", keyDownHandler)
        }
    })

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

    return (
        <div className={styles.main}>
            <ScrollBar
                activePage={activePage}
                setActivePage={setActivePage}
                previousPage={previousPage}
                setPreviousPage={setPreviousPage}
            />
            {!showInstructions && (
                <SideBar
                    activePage={activePage}
                    setActivePage={setActivePage}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                />
            )}
            <div className="section-container">
                <HomeSection
                    activePage={activePage}
                    setActivePage={setActivePage}
                    previousPage={previousPage}
                    setPreviousPage={setPreviousPage}
                    showInstructions={showInstructions}
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
