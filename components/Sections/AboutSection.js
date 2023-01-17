import { Icon } from "@iconify/react"
import { useState } from "react"

const AboutSection = ({ activePage, setActivePage }) => {
    const [showArrow, setShowArrow] = useState(true)
    return (
        <div className={`section about ${activePage != "about" && "hidden"}`}>
            <div className="upper-third">
                {" "}
                <div
                    className={`down-arrow ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("home")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-up" />
                </div>
            </div>
            <div className="middle-third">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum
            </div>
            <div className="lower-third">
                {" "}
                <div
                    className={`down-arrow ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("resume")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-down" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
