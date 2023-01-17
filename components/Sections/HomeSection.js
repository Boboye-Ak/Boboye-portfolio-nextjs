const HomeSection = ({ activePage }) => {
    return <div className={`section ${activePage != "home" && "hidden"}`}>HomeSection</div>
}

export default HomeSection
