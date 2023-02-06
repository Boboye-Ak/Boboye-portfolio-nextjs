import { Icon } from "@iconify/react"
import React from "react"
import { motion } from "framer-motion"

const Instructions = () => {
    const instructionVariants = {
        initial: {
            opacity: 1,
        },
        final: {
            opacity: 0,
        },
    }
    return (
        <motion.div
            className="instructions-container"
            variants={{ instructionVariants }}
            initial="initial"
            animate="final"
        >
            <div className="pc-instruction">
                <div className="icons">
                    <Icon icon="emojione-v1:downwards-button" />/
                    <Icon icon="icon-park-outline:enter-key" />/
                    <Icon icon="fluent:spacebar-24-filled" />
                </div>
                <p>
                    Use down button/Enter Button/Spacebar or click on down arrow to go to the next
                    page
                </p>
            </div>
            <div className="pc-instruction">
                <div className="icons">
                    <Icon icon="emojione-v1:upwards-button" />
                </div>
                <p>Use up button or click on up arrow to go to the previous page</p>
            </div>
            <div className="mobile-instruction">
                <Icon icon="line-md:loading-twotone-loop" />
            </div>
        </motion.div>
    )
}

export default Instructions
