import React from "react";
import Gear from '../imgs/gear.png'

function Header() {
	return (
		<header>
			<div className="left-side">
				<h1 className="title">Tranquility</h1>
				<div className="line-divider"></div>
			</div>

			<div className="right-side">
				<button className="settings-button">
					<img id="gear" src={Gear} />
				</button>
			</div>
		</header>
	)
}

export default Header;