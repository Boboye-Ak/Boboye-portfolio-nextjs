import { Icon } from "@iconify/react"

const HomeSection = ({ activePage, setActivePage }) => {
    return (
        <div className={`section home ${activePage != "home" && "hidden"}`}>
            <div className="upper-half">
                <div className="name">
                    Akinboboye <span>Akinwande</span>
                </div>
                <div className="title">I am a FullStack Web2/Web3 Developer</div>
            </div>
            <div className="bottom-half">
                <div
                    className="down-arrow"
                    onClick={() => {
                        setActivePage("about")
                    }}
                >
                    <Icon icon="ic:outline-arrow-circle-down" />
                </div>
            </div>
        </div>
    )
}

export default HomeSection
