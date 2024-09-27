import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={require("../../assets/images/logo/logo.png")} alt="logo" />
      </div>
      <div className="icons">
        <img
          src={require("../../assets/images/icons/search.svg").default}
          alt="search"
          className="icon"
        />
        <img
          src={require("../../assets/images/icons/app.svg").default}
          alt="app"
          className="icon"
        />
        <img
          src={require("../../assets/images/icons/expand.svg").default}
          alt="expand"
          className="icon"
        />
        <div className="notification">
          <img
            src={require("../../assets/images/icons/notifications.svg").default}
            alt="notifications"
          />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src={require("../../assets/images/users/user.png")}
            alt="user photo"
          />
          <span>Demo User</span>
        </div>
        <img
          src={require("../../assets/images/icons/settings.svg").default}
          alt="settings"
          className="icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
