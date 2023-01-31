import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"

const aboutText =
    "I am a 23 year old energetic full stack web2 and web3 developer passionate about building software solutions that create value and lead to the improvement of the quality of life of people. I am proficient in Javascript(Vanilla JS, ReactJS, NextJS and NodeJS), Python, Solidity (Working with Hardhat, Brownie, Ethers, Web3.js and Web3.py) and several associated technologies."

const AboutSection = ({ activePage, setActivePage, previousPage }) => {
    const [showArrow, setShowArrow] = useState(true)
    const [hasBeenViewed, setHasBeenViewed] = useState(false)
    const [showInstructions, setShowInstructions]=useState(true)
    useEffect(() => {
        if (!hasBeenViewed && activePage == "about") {
            setHasBeenViewed(true)
        }
    }, [activePage])
    return (
        <div
            className={`section about ${activePage != "about" && "hidden"} ${
                previousPage == "about" && "previous"
            }`}
        >
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
                {(activePage == "about" || hasBeenViewed) && (
                    <motion.p
                        initial={{ fontSize: "1em", rotateZ: 180 }}
                        animate={{ fontSize: "1.2em", rotateZ: 0 }}
                        transition={{ type: "spring", delay: 0.5, duration: 0.5 }}
                    >
                        {aboutText}
                    </motion.p>
                )}
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
