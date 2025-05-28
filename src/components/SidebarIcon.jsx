import React from 'react'
import Icon from"../images/icon.png";
function SidebarIcon(){
    return(
        <div className="SidebarIcon">
            <img src={Icon} alt="User icon"/>
            <p>typescriptpractice@gmail.com</p>
        </div>
    );
}

export default SidebarIcon;