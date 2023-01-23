const ScrollBar = ({ activePage }) => {
    return (
        <div className="scroll-bar">
            <div className={`division ${activePage == "home" ? "active" : undefined}`}></div>
            <div className={`division ${activePage == "about" ? "active" : undefined}`}></div>
            <div className={`division ${activePage == "resume" ? "active" : undefined}`}></div>
            <div className={`division ${activePage == "projects" ? "active" : undefined}`}></div>
            <div className={`division ${activePage == "contact" ? "active" : undefined}`}></div>
        </div>
    )
}

export default ScrollBar
