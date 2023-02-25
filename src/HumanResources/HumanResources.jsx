import React, { useState } from 'react'
import '../index.css';

export default function SideNavbar() {
    const [isExpanded, setExpanded] = useState(false);
    const menuItems = [
		{
			text: "User",
			icon: "icons/user.png",
		},
		{
			text: "Salary",
			icon: "icons/salary.png",
		},
		{
			text: "Application",
			icon: "icons/application.png",
		},
		{
			text: "Role",
			icon: "icons/role.png",
		},
		{
			text: "Position",
			icon: "icons/position.png",
		},
        {
			text: "Department",
			icon: "icons/department.png",
		},
        {
			text: "Country",
			icon: "icons/country.png",
		},
        {
			text: "State",
			icon: "icons/state.png",
		},
        {
			text: "City",
			icon: "icons/city.png",
		},
	];
  return (
    <div className={isExpanded? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
        <div className="nav-upper">
            <div className="nav-heading">
                <div className="nav-brand">
                    <img src='icons/hr.png' alt='nav-brand'></img>
                    <h3>HR</h3>
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
                        <img src={icon} alt='icon' className='icon-img'></img>
                        {isExpanded && <p>{text}</p>}
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}
