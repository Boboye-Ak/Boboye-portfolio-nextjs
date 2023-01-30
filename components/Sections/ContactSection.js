import { Icon } from "@iconify/react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const ContactSection = ({ activePage, setActivePage, previousPage }) => {
    const [hasBeenViewed, setHasBeenViewed] = useState(false)

    useEffect(() => {
        if (!hasBeenViewed && activePage == "contact") {
            setHasBeenViewed(true)
        }
    }, [activePage])
    return (
        <div
            className={`section contact ${activePage != "contact" && "hidden"} ${
                previousPage == "contact" && "previous"
            }`}
        >
            <div className="upper-third">
                {" "}
                <div
                    className={`arrow up`}
                    onClick={() => {
                        setActivePage("projects")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-up" />
                </div>
            </div>
            <div className="middle-third">
                {(activePage == "contact" || hasBeenViewed) && (
                    <div className="social-list">
                        <motion.div
                            className="social-row"
                            initial={{ x: "-100vw" }}
                            animate={{ x: "0" }}
                            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                        >
                            <motion.div className="social">
                                <Icon icon="material-symbols:contact-phone" />
                            </motion.div>
                            <motion.div className="social">
                                <Icon icon="logos:google-gmail" />
                            </motion.div>
                            <motion.div className="social">
                                <Icon icon="uiw:linkedin" />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="social-row"
                            initial={{ x: "100vw" }}
                            animate={{ x: "0" }}
                            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                        >
                            <motion.div className="social">
                                <Icon icon="bi:github" />
                            </motion.div>
                            <motion.div className="social">
                                <Icon icon="icon-park:twitter" />
                            </motion.div>
                            <motion.div className="social"><Icon icon="skill-icons:instagram"/></motion.div>
                        </motion.div>
                    </div>
                )}
            </div>
            <div className="lower-third">
                {" "}
                <div
                    className={`arrow down`}
                    onClick={() => {
                        setActivePage("home")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-down" />
                </div>
            </div>
        </div>
    )
}

export default ContactSection
