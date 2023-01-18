import { useState } from "react"

const Project = ({ project, active, projects, key }) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            className={`projects-container ${active && "active"}`}
            onMouseEnter={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <div
                className="project"
                style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className={`cover-film ${isHovered && "active"}`}></div>
            </div>
        </div>
    )
}

export default Project
