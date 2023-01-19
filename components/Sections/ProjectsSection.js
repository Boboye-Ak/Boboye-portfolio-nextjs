import { useState } from "react"
import { Icon } from "@iconify/react"
import Project from "../Project/Project"

const projects = [
    {
        name: "Chakra",
        image: "project images/chakra screenshot.PNG",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        liveLink: "https://chakra.up.railway.app/",
        github: ["", "", ""],
        technologiesUsed: [
            "NextJS for the frontend",
            "NodeJS for the backend",
            "Hardhat for the smart contracts",
            "MongoDB for the Database",
        ],
    },
    {
        name: "Polygon Timed Safelock",
        image: "project images/Timed safelock screenshot.PNG",
        description: "",
        liveLink: "https://polygon-timed-safelock.netlify.app/",
        github: [""],
        technologiesUsed: [""],
    },
    {
        name: "CrowdFund3r",
        image: "project images/crowdfund3r screenshot.jpeg",
        description: "",
        liveLink: "https://crowdfund3r.netlify.app/",
        github: [""],
        technologiesUsed: [""],
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
                return 0
            }
        })
    }
    const previousProject = () => {
        setCurrentProjectIndex((currentValue) => {
            if (currentValue == 0) {
                return projects.length - 1
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
                    className={`arrow up`}
                    onClick={() => {
                        setActivePage("resume")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-up" />
                </div>
            </div>
            <div className="middle-third">
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
                    className={`arrow down`}
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
