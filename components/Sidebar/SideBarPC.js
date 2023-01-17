import { Icon } from "@iconify/react"

const SideBarPC = ({ activePage, setActivePage }) => {
    return (
        <div className="sidebar-pc">
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
                <a>
                    <Icon icon="bi:github" />
                </a>
                <a>
                    <Icon icon="bi:linkedin" />
                </a>
                <a>
                    <Icon icon="bi:twitter" />
                </a>
                <a>
                    <Icon icon="mdi:gmail" />
                </a>
            </div>
        </div>
    )
}

export default SideBarPC
