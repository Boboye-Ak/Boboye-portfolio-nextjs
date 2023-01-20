import { Icon } from "@iconify/react"
import { useState } from "react"

const resumePagesImages = [
    "resume pages/Akinboboye Akinwande Resume_01.jpg",
    "resume pages/Akinboboye Akinwande Resume_02.jpg",
    "resume pages/Akinboboye Akinwande Resume_03.jpg",
]

const ResumeSection = ({ activePage, setActivePage }) => {
    const [showArrow, setShowArrow] = useState(true)
    const [resumePageIndex, setResumePageIndex] = useState(0)

    const nextPage = () => {
        setResumePageIndex((currentPageIndex) => {
            if (currentPageIndex < resumePagesImages.length - 1) {
                return currentPageIndex + 1
            } else {
                return 0
            }
        })
    }
    const previousPage = () => {
        setResumePageIndex((currentPageIndex) => {
            if (currentPageIndex == 0) {
                return resumePagesImages.length - 1
            } else {
                return currentPageIndex - 1
            }
        })
    }
    return (
        <div className={`section resume ${activePage != "resume" && "hidden"}`}>
            <div className="upper-third">
                {" "}
                <div
                    className={`arrow up`}
                    onClick={() => {
                        setActivePage("about")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-up" />
                </div>
            </div>
            <div className="middle-third">
                <div className="resume-page">
                    <a
                        className="download-resume"
                        href="Akinboboye Akinwande Resume.pdf"
                        download={true}
                        title="download resume"
                    >
                        <Icon icon="material-symbols:download" />
                    </a>
                    <div className="page-label">
                        {resumePageIndex + 1}/{resumePagesImages?.length}
                    </div>
                    {resumePagesImages?.map((page, index) => {
                        return (
                            <img
                                key={index}
                                src={page}
                                className={index == resumePageIndex ? "active":undefined}
                            />
                        )
                    })}
                    <div
                        className="change-resume-page before"
                        onClick={() => {
                            previousPage()
                        }}
                    >
                        <Icon icon="material-symbols:navigate-before" />
                    </div>
                    <div
                        className="change-resume-page next"
                        onClick={() => {
                            nextPage()
                        }}
                    >
                        <Icon icon="material-symbols:navigate-next" />
                    </div>
                </div>
            </div>
            <div className="lower-third">
                {" "}
                <div
                    className={`arrow down`}
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
