import SideBarMobile from "./SideBarMobile"
import SideBarPC from "./SideBarPC"

const SideBar = ({ activePage, setActivePage }) => {
    return (
        <div>
            <SideBarMobile activePage={activePage} setActivePage={setActivePage} />
            <SideBarPC activePage={activePage} setActivePage={setActivePage}/>
        </div>
    )
}

export default SideBar
