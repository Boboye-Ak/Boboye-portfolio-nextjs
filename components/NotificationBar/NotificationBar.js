const NotificationBar = ({ isShown, notificationText, imgSrc }) => {
    return (
        <div className={`notification-bar-container ${!isShown && "hidden"}`}>
            <div className="notification-bar">
                <div className="logo">
                    <img src={imgSrc} />
                </div>
                <div className="notification-text">{notificationText}</div>
            </div>
        </div>
    )
}

export default NotificationBar
