import { Icon } from "@iconify/react"
import { useState } from "react"

const Project = ({ project, active, projects }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div
            className={`projects-container ${active && "active"} ${isClicked && "clicked"}`}
            onMouseEnter={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <div
                onClick={() => {
                    setIsClicked(!isClicked)
                    setIsHovered(false)
                }}
                className={`project ${isClicked && "clicked"}`}
                style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className={`cover-film ${isHovered && "active"} ${isClicked && "clicked"}`}>
                    <p className="description">{project?.description}</p>
                    <p
                        className="see-more"
                        onClick={() => {
                            setIsClicked(!isClicked)
                        }}
                    >
                        Click to see {isClicked ? "less" : "more"}
                    </p>
                </div>
            </div>
            <div className={`project-details ${isClicked && "clicked"}`}>
                <div className="project-links live-link">
                    <a href={project?.liveLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:internet" />
                    </a>
                </div>
                <div className="project-links github">
                    {project?.github.map((link, index) => {
                        return (
                            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                <Icon icon="ri:github-fill" />
                            </a>
                        )
                    })}
                </div>
                <ul>
                    {project?.technologiesUsed.map((technology, index) => {
                        return <li key={index}>{technology}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Project
