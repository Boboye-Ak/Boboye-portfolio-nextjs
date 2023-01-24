const ScrollBar = ({ activePage, setActivePage }) => {
    return (
        <div className="scroll-bar">
            <div
                className={`division ${activePage == "home" ? "active" : undefined}`}
                onClick={() => {
                    setActivePage("home")
                }}
            ></div>
            <div
                className={`division ${activePage == "about" ? "active" : undefined}`}
                onClick={() => {
                    setActivePage("about")
                }}
            ></div>
            <div
                className={`division ${activePage == "resume" ? "active" : undefined}`}
                onClick={() => {
                    setActivePage("resume")
                }}
            ></div>
            <div
                className={`division ${activePage == "projects" ? "active" : undefined}`}
                onClick={() => {
                    setActivePage("projects")
                }}
            ></div>
            <div
                className={`division ${activePage == "contact" ? "active" : undefined}`}
                onClick={() => {
                    setActivePage("contact")
                }}
            ></div>
        </div>
    )
}

export default ScrollBar
