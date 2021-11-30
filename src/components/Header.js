import React from "react";
import Gear from '../imgs/gear.png'

function Header() {
	return (
		<>
			<header>
				<div className="left-side">
					<h1 className="title">Tranquility</h1>
				</div>

				<div className="right-side">
					<button className="settings-button">
						<img id="gear" src={Gear} />
					</button>
				</div>
			</header>
			<div className="line-divider"></div>
		</>
	)
}

export default Header;