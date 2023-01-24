import { Icon } from "@iconify/react"
import { useState } from "react"
import Typewriter from "typewriter-effect"

const aboutText =
    "I am a 23 year old energetic full stack web2 and web3 developer passionate about building software solutions that create value and lead to the improvement of the quality of life of people. I am proficient in Javascript(Vanilla JS, ReactJS, NextJS and NodeJS), Python, Solidity (Working with Hardhat, Brownie, Ethers, Web3.js and Web3.py) and several associated technologies."

const AboutSection = ({ activePage, setActivePage }) => {
    const [showArrow, setShowArrow] = useState(true)

    const handleTypewriter = (typewriter) => {
        typewriter.pauseFor(500).typeString(aboutText).start()
    }
    return (
        <div className={`section about ${activePage != "about" && "hidden"}`}>
            <div className="upper-third">
                {" "}
                <div
                    className={`arrow up ${!showArrow && "hidden"}`}
                    onClick={() => {
                        setActivePage("home")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-up" />
                </div>
            </div>
            <div className="middle-third">
                <p>{activePage == "about" && <Typewriter onInit={handleTypewriter} />}</p>
            </div>
            <div className="lower-third">
                {" "}
                <div
                    className={`arrow down`}
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
