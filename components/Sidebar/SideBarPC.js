import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const SideBarPC = ({ activePage, setActivePage }) => {
    return (
        <motion.div
            className="sidebar-pc"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 5.5, duration:0.5 }}
        >
            <div className="profile-picture">
                <img src="/developer-image.jpeg" />
                <div className="label">Akinboboye Akinwande</div>
            </div>
            <div className="page-list">
                <div
                    className={`page ${activePage == "home" && "active"}`}
                    onClick={() => {
                        setActivePage("home")
                    }}
                >
                    <Icon icon="material-symbols:home-outline" />
                    Home
                </div>
                <div
                    className={`page ${activePage == "about" && "active"}`}
                    onClick={() => {
                        setActivePage("about")
                    }}
                >
                    <Icon icon="healthicons:ui-user-profile-outline" />
                    {"  "}
                    About
                </div>
                <div
                    className={`page ${activePage == "resume" && "active"}`}
                    onClick={() => {
                        setActivePage("resume")
                    }}
                >
                    <Icon icon="mdi:resume" />
                    {"  "}
                    Resume
                </div>
                <div
                    className={`page ${activePage == "projects" && "active"}`}
                    onClick={() => {
                        setActivePage("projects")
                    }}
                >
                    <Icon icon="bytesize:portfolio" />
                    {"  "}
                    Projects
                </div>
                <div
                    className={`page ${activePage == "contact" && "active"}`}
                    onClick={() => {
                        setActivePage("contact")
                    }}
                >
                    <Icon icon="material-symbols:mail-outline-sharp" />
                    {"  "}
                    Contact
                </div>
            </div>
            <div className="socials-list">
                <a href="https://github.com/Boboye-Ak" target="_blank" rel="noopener noreferrer">
                    <Icon icon="bi:github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/akinboboye-akinwande-782552106/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="bi:linkedin" />
                </a>
                <a href="https://twitter.com/Ak_Bob_oye" target="_blank" rel="noopener noreferrer">
                    <Icon icon="bi:twitter" />
                </a>
                <a href="mailto:boboye771@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:gmail" />
                </a>
            </div>
        </motion.div>
    )
}

export default SideBarPC
