import { Icon } from "@iconify/react"
import { useState } from "react"

const ResumeSection = ({ activePage, setActivePage }) => {
    const [showArrow, setShowArrow] = useState(true)
    return (
        <div className={`section resume ${activePage != "resume" && "hidden"}`}>
            <div className="upper-third">
                {" "}
                <div
                    className={`down-arrow ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("about")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-up" />
                </div>
            </div>
            <div className="middle-third">
                <div className="resume-page">Resume Page</div>
            </div>
            <div className="lower-third">
                {" "}
                <div
                    className={`down-arrow ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("projects")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-down" />
                </div>
            </div>
        </div>
    )
}

export default ResumeSection
