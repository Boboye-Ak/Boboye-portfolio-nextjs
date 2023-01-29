import { Icon } from "@iconify/react"
import { useState } from "react"
import Typewriter from "typewriter-effect"

const HomeSection = ({ activePage, setActivePage, previousPage }) => {
    const [showArrow, setShowArrow] = useState(false)
    const handleTypewriter = (typewriter) => {
        typewriter
            .pauseFor(500)
            .typeString("I am a FullStack Web2/Web3 Developer")
            .callFunction(() => {
                setShowArrow(true)
            })
            .start()
    }

    return (
        <div
            className={`section home ${activePage != "home" ? "hidden" : undefined} ${
                previousPage == "home" && "previous"
            }`}
        >
            <div className="upper-half">
                <div className="name">
                    Hi, I&apos;m <span>Boboye Akinwande</span>
                </div>
                <div className="title">
                    <Typewriter onInit={handleTypewriter} />
                </div>
            </div>
            <div className="bottom-half">
                <div
                    className={`arrow down ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("about")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-down" />
                </div>
            </div>
        </div>
    )
}

export default HomeSection
