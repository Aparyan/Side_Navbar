import React, { useState } from 'react'
import '../index.css';

export default function SideNavbar() {
    const [isExpanded, setExpanded] = useState(false);
    const menuItems = [
		{
			text: "Personal Info",
			icon: "icons/info.png",
		},
		{
			text: "education",
			icon: "icons/education.png",
		},
		{
			text: "Dependents",
			icon: "icons/dependents.png",
		},
		{
			text: "Work Experience",
			icon: "icons/exp.png",
		},
		{
			text: "Leave Application",
			icon: "icons/application.png",
		},
	];
  return (
    <div className={isExpanded? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
        <div className="nav-upper">
            <div className="nav-heading">
                <div className="nav-brand">
                    <img src='icons/employee.png' alt='nav-brand'></img>
                    <h3>Employee</h3>
                </div>
                <button className={isExpanded? 'hamburger hamburger-in' : 'hamburger hamburger-out'}
                onClick={() => setExpanded(!isExpanded)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="nav-menu">
                {menuItems.map(({text, icon}) => (
                    <a href='#' className={isExpanded ? 'menu-item' : 'menu-item menu-item-NX'}>
                        <img src={icon} alt='icon'></img>
                        {isExpanded && <p>{text}</p>}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}
