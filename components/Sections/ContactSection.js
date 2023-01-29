import { Icon } from "@iconify/react"
import { useState } from "react"

const ContactSection = ({ activePage, setActivePage, previousPage }) => {
    const [showArrow, setShowArrow] = useState(true)
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
                <div className="social-list">
                    {" "}
                    <div className="social">
                        <span>
                            <Icon icon="material-symbols:contact-phone" />
                        </span>
                        {"    "}
                        <span>+2348120460453</span>
                    </div>
                    <div className="social">
                        <span>
                            <Icon icon="logos:google-gmail" />
                        </span>
                        {"    "}
                        <span>boboye771@gmail.com</span>
                    </div>
                    <div className="social">
                        <span>
                            <Icon icon="uiw:linkedin" />
                        </span>
                        {"    "}
                        <span>Akinboboye Akinwande</span>
                    </div>
                    <div className="social">
                        <span>
                            <Icon icon="bi:github" />
                        </span>
                        {"    "}
                        <span>Boboye-Ak</span>
                    </div>
                    <div className="social">
                        <span>
                            <Icon icon="icon-park:twitter" />
                        </span>
                        {"    "}
                        <span>@Ak_bob_oye</span>
                    </div>
                </div>
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
