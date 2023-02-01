import { Icon } from "@iconify/react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const ContactSection = ({ activePage, setActivePage, previousPage }) => {
    const initialSocial = {
        scale: 1.0,
        textShadow: "0px 0px 2px rgb(255, 255, 255)",
        boxShadow: "0px 0px 2px rgb(255, 255, 255)",
    }
    const socialWhileHover = {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            duration: 0.1,
        },
    }

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
                <h1>Contact Me</h1>
                {(activePage == "contact" || hasBeenViewed) && (
                    <div className="social-list">
                        <motion.div
                            className="social-row"
                            initial={{ x: "-100vw" }}
                            animate={{ x: "0" }}
                            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                        >
                            <motion.a
                                className="social"
                                whileHover={{ ...socialWhileHover, color: "aqua" }}
                                href="tel:+2348120460453"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon="material-symbols:contact-phone" />
                            </motion.a>
                            <motion.a
                                className="social"
                                whileHover={{ ...socialWhileHover, color: "#d44638" }}
                                href="mailto:boboye771@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon="mdi:gmail" />
                            </motion.a>
                            <motion.a
                                className="social"
                                whileHover={{ ...socialWhileHover, color: "#0072b1" }}
                                href="https://www.linkedin.com/in/akinboboye-akinwande-782552106/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon="mdi:linkedin" />
                            </motion.a>
                        </motion.div>
                        <motion.div
                            className="social-row"
                            initial={{ x: "100vw" }}
                            animate={{ x: "0" }}
                            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
                        >
                            <motion.a
                                className="social"
                                whileHover={{ ...socialWhileHover, color: "black" }}
                                href="https://github.com/Boboye-Ak"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon="mdi:github" />
                            </motion.a>
                            <motion.a
                                className="social"
                                whileHover={{ ...socialWhileHover, color: "#00acee" }}
                                href="https://twitter.com/Ak_Bob_oye"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon="mdi:twitter" />
                            </motion.a>
                            <motion.a
                                className="social"
                                whileHover={{ ...socialWhileHover, color: "#fa7e1e" }}
                                href="https://www.instagram.com/boboye_ak/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon="mdi:instagram" />
                            </motion.a>
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
