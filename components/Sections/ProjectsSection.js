import { useState } from "react"
import { Icon } from "@iconify/react"
import Project from "../Project/Project"

const projects = [
    {
        name: "Chakra",
        image: "project images/chakra screenshot.PNG",
        description: "",
        liveLink: "https://chakra.up.railway.app/",
        github: [""],
    },
    {
        name: "Polygon Timed Safelock",
        image: "project images/Timed safelock screenshot.PNG",
        description: "",
        liveLink: "https://polygon-timed-safelock.netlify.app/",
        github: [""],
    },
    {
        name: "CrowdFund3r",
        image: "project images/crowdfund3r screenshot.jpeg",
        description: "",
        liveLink: "https://crowdfund3r.netlify.app/",
        github: [""],
    },
]

const ProjectsSection = ({ activePage, setActivePage }) => {
    const [showArrow, setShowArrow] = useState(true)
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

    const nextProject = () => {
        setCurrentProjectIndex((currentValue) => {
            if (currentValue < projects.length - 1) {
                return currentValue + 1
            } else {
                return currentValue
            }
        })
    }
    const previousProject = () => {
        setCurrentProjectIndex((currentValue) => {
            if (currentValue == 0) {
                return currentValue
            } else {
                return currentValue - 1
            }
        })
    }
    return (
        <div className={`section projects ${activePage != "projects" && "hidden"}`}>
            <div className="upper-third">
                {" "}
                <div
                    className={`down-arrow ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("resume")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-up" />
                </div>
            </div>
            <div className="middle-third">
                <div className="header">PROJECTS</div>
                <div
                    className="change-project-set previous"
                    onClick={() => {
                        previousProject()
                    }}
                >
                    <Icon icon="material-symbols:navigate-before" />
                </div>
                {projects?.map((project, index) => {
                    return (
                        <Project
                            project={project}
                            active={index == currentProjectIndex}
                            key={index}
                            projects={projects}
                        />
                    )
                })}
                <div
                    className="change-project-set next"
                    onClick={() => {
                        nextProject()
                    }}
                >
                    <Icon icon="material-symbols:navigate-next" />
                </div>
            </div>
            <div className="lower-third">
                {" "}
                <div
                    className={`down-arrow ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("contact")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-down" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
