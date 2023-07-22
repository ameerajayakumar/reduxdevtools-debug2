import React, { useEffect } from "react";
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";
import store from "../todoStore";

const Header = () => {

  const isDarkMode = store.getState().isDarkMode;
  console.log('Getting mode in Header', isDarkMode);
  
  const getThemeIcon = (isDarkMode) => {
    return isDarkMode ? SwitchToLightIcon : SwitchToDarkIcon;
  }
  let themeIcon = getThemeIcon(isDarkMode);

  useEffect(() => {
    store.subscribe(() => {
      let isDarkMode = store.getState().isDarkMode;
      document.getElementById("themeIcon").src = getThemeIcon(isDarkMode);
    })
  }, [])

  const changeTheme = () => {
    // setIsDarkMode(!isDarkMode);
    store.dispatch({type: "TOGGLE_DARK_MODE"});
  };

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn" onClick={changeTheme}>
        <img id="themeIcon" src={themeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default Header;