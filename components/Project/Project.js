import { Icon } from "@iconify/react"
import { useState } from "react"
import Typewriter from "typewriter-effect"

const Project = ({ project, active, projects }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
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
                    setHasBeenClicked(true)
                    setIsHovered(false)
                }}
                className={`project ${isClicked && "clicked"}`}
                style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="project-name-container">
                    <div className="project-name">{project?.name}</div>
                </div>
                <div
                    className={`cover-film ${(isHovered || isClicked) && "active"} ${
                        isClicked && "clicked"
                    }`}
                >
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
            <div
                className={`project-details ${isClicked && "clicked"}`}
                onClick={() => {
                    setIsClicked(!isClicked)
                }}
            >
                <h2>Tools Used</h2>
                <ul>
                    {project?.technologiesUsed.map((technology, index) => {
                        return (
                            <li key={index}>
                                {(isClicked || hasBeenClicked) && (
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString(`> ${technology}`).start()
                                        }}
                                    />
                                )}
                            </li>
                        )
                    })}
                </ul>
                <h2>Links</h2>
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
            </div>
        </div>
    )
}

export default Project
