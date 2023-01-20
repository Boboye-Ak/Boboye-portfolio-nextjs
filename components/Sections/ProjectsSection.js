import { useState } from "react"
import { Icon } from "@iconify/react"
import Project from "../Project/Project"

const projects = [
    {
        name: "Chakra",
        image: "project images/chakra screenshot.PNG",
        description:
            "An application for purchasing Airtime, Data Subscriptions, Bill Payments and Giftcard Purchases using tokens on different EVM blockchains",
        liveLink: "https://chakra.up.railway.app/",
        github: [],
        technologiesUsed: [
            "NextJS for the frontend",
            "NodeJS for the backend",
            "Solidity using Hardhat for the smart contracts",
            "Mocha for the smart contract testing",
            "Moralis Streams and Moralis SDK for blockchain querying",
            "MongoDB for the Database",
        ],
    },
    {
        name: "Polygon Timed Safelock",
        image: "project images/Timed safelock screenshot.PNG",
        description:
            "I built smart contracts, wrote mocha tests and deploy scripts for smart contracts(for EVM compatible chains) that control a dapp that allows wallets lock up layer 1 tokens till a preset time has elapsed for them or a preset third part wallet only to withdraw.",
        liveLink: "https://polygon-timed-safelock.netlify.app/",
        github: [
            "https://github.com/Boboye-Ak/hardhat-timed-safelock",
            "https://github.com/Boboye-Ak/nextjs-timed-safelock",
        ],
        technologiesUsed: [
            "NextJS For the Frontend",
            "Solidity using Hardhat for the smart contracts",
            "Mocha for the smart contract testing",
        ],
    },
    {
        name: "CrowdFund3r",
        image: "project images/crowdfund3r screenshot.jpeg",
        description:
            "The first of its kind that I know of. It is a website for those in need of financial aid from the public to crowdfund and receive donations in ethereum. As well as providing protection of donors from fraud. ",
        liveLink: "https://crowdfund3r.netlify.app/",
        github: [
            "https://github.com/Boboye-Ak/nextjs-go-fund-me3",
            "https://github.com/Boboye-Ak/hardhat-go-fund-me-3",
        ],
        technologiesUsed: ["NextJS For the Frontend",
        "Solidity using Hardhat for the smart contracts",
        "Mocha for the smart contract testing",],
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
