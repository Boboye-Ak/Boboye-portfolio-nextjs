import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import Instructions from "../Instructions/Instructions"

const HomeSection = ({ activePage, setActivePage, previousPage }) => {
    const [showArrow, setShowArrow] = useState(true)
    const [showInstructions, setShowInstructions] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowInstructions(false)
        }, 5000)
    }, [])
    return (
        <>
            {showInstructions && <Instructions />}
            <div
                className={`section home ${activePage != "home" ? "hidden" : undefined} ${
                    previousPage == "home" && "previous"
                }`}
            >
                {!showInstructions && (
                    <div className="upper-half">
                        <motion.div
                            className="name"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Hi, I&apos;m <span>Boboye Akinwande</span>
                        </motion.div>
                        <motion.div
                            className="title"
                            initial={{ x: "-100vw" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
                        >
                            I am a FullStack Web2/Web3 Developer
                        </motion.div>
                    </div>
                )}
                {!showInstructions && (
                    <div className="bottom-half">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.0, type: "tween", duration: 0.4 }}
                            className={`arrow down ${!showArrow && "hidden"}`}
                            onClick={() => {
                                setActivePage("about")
                            }}
                        >
                            <Icon icon="ic:outline-arrow-circle-down" />
                        </motion.div>
                    </div>
                )}
            </div>
        </>
    )
}

export default HomeSection
